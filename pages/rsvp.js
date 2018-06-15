import { withFormik } from 'formik';

import Button from '../components/button'
import TextBox from '../components/textbox'
import { getFormData } from '../utilities/helper'

const formURL = 'https://script.google.com/macros/s/AKfycby7BDqLK2YNyaksP4ypUfLtnLN2rx9RpySq44Wscv1ZF-I8E3Q/exec'

const InnerForm = ({
  errors,
  touched,
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit} style={styles.form}>
    <TextBox
      error={errors.name}
      id='name'
      name='name'
      onChange={handleChange}
      onBlur={handleBlur}
      style={styles.inputName}
      title="What's your name?"
      touched={touched.name}
      value={values.name} />
    <TextBox
      error={errors.pax}
      id='pax'
      name='pax'
      onChange={handleChange}
      onBlur={handleBlur}
      style={styles.inputPax}
      title="How many persons will come? (including you)"
      touched={touched.pax}
      value={values.pax} />
    <Button
      style={styles.submitButton}
      type='submit'
      disabled={isSubmitting}>
      Submit
    </Button>
  </form>
)

const RSVPForm = withFormik({
  mapPropsToValues: props => ({name: ''}),
  validate: (values, props) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Please specify your name';
    }
    console.log(values)
    if (!values.pax) {
        errors.pax = 'Please specify the number of persons';
    } else if (isNaN(parseInt(values.pax))) {
        errors.pax = 'Please input a valid number'
    }
    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      resetForm,
      setSubmitting,
      setErrors
    }
  ) => {
    // do form submission here
    console.log(values)
    fetch(formURL, { method: 'POST', body: getFormData(values)})
      .then(res => {
        console.log('Success: ', res);
        resetForm({
          name: '',
          pax: '',
        })
      })
      .catch(err => console.log('Err: ', err))
  }
})(InnerForm)

export default () =>
  <div style={styles.container}>
    <h1 style={styles.title}>RSVP here</h1>
    <RSVPForm />
  </div>

const styles = {
  container: {

  },
  title: {
    textAlign: 'center'
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr) 2em',
    gridGap: '.5em'
  },
  inputName: {
    gridColumn: '2 / span 3',
    gridRow: '1',
  },
  inputPax: {
    gridColumn: '2 / span 3',
    gridRow: '2',
  },
  submitButton: {
    gridColumn: '3',
    gridRow: '3'
  }
}
