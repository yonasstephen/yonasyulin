import { withFormik } from 'formik';

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
  <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Name</label>
    <input
      type='text'
      id='name'
      name='name'
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
    />
    {touched.name && errors.name && <div>{errors.name}</div>}
    <button type='submit' disabled={isSubmitting}>Submit</button>
  </form>
)

const getFormData = object => Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
}, new FormData());

const RSVPForm = withFormik({
  mapPropsToValues: props => ({name: ''}),
  validate: (values, props) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors
    }
  ) => {
    // do form submission here
    console.log(values)
    fetch(formURL, { method: 'POST', body: getFormData(values)})
      .then(res => console.log('Success: ', res))
      .catch(err => console.log('Err: ', err))
  }
})(InnerForm)

export default () =>
  <div>
    <h1>RSVP here</h1>
    <RSVPForm />
  </div>
