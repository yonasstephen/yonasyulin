import { withFormik } from 'formik'

import Button from '../components/button'
import TextBox from '../components/textbox'
import RadioButton from '../components/radiobutton'
import Checkbox from '../components/checkbox'
import { getFormData, uuidv4 } from '../utilities/helper'

const formURL = process.env.FORM_URL
const presenceOptions = [
  { caption: 'I will be there', value: 1 },
  { caption: "Sorry I can't make it", value: 0 }
]
const locationOptions = [
  { caption: 'Singapore, 8 Sep 2018 (11 AM)', value: 'sg' },
  { caption: 'Jakarta, 15 Sep 2018 (7 PM)', value: 'jkt' }
]

const InnerForm = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  touched,
  values
}) => {
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.radioGroupIsComing}>
        <RadioButton
          error={errors.is_coming}
          name="is_coming"
          onBlur={handleBlur}
          onChange={handleChange}
          options={presenceOptions}
          selectedValue={values.is_coming}
          title="Will you come to our wedding?"
          touched={touched.is_coming}
        />
      </div>
      <TextBox
        error={errors.name}
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        style={styles.inputName}
        title="What's your name?"
        touched={touched.name}
        value={values.name}
      />
      {values.is_coming === '1' && (
        <div style={styles.checkboxGroupLocations}>
          <Checkbox
            error={errors.locations}
            name="locations"
            onBlur={handleBlur}
            onChange={setFieldValue}
            options={locationOptions}
            selectedValues={values.locations}
            title="Which event will you come to?"
            touched={touched.locations}
          />
        </div>
      )}
      {values.is_coming === '1' && (
        <TextBox
          error={errors.pax}
          name="pax"
          onChange={handleChange}
          onBlur={handleBlur}
          style={styles.inputPax}
          title="How many persons will come? (including you)"
          touched={touched.pax}
          value={values.pax}
        />
      )}
      <Button style={styles.submitButton} type="submit" disabled={isSubmitting}>
        {/* {isSubmitting && <Spinner name="line-scale" color="white" />} */}
        Submit
      </Button>
    </form>
  )
}

const RSVPForm = withFormik({
  mapPropsToValues: props => ({
    name: '',
    locations: [],
    pax: ''
  }),
  validate: (values, props) => {
    const errors = {}
    if (!values.is_coming) {
      errors.is_coming = 'Please indicate your presence'
    }

    if (!values.name) {
      errors.name = 'Please specify your name'
    }

    // Required details if coming
    if (values.is_coming === '1') {
      if (!values.locations || values.locations.length < 1) {
        errors.locations = 'Please indicate which event you will come to'
      }

      if (!values.pax) {
        errors.pax = 'Please specify the number of persons'
      } else if (isNaN(parseInt(values.pax))) {
        errors.pax = 'Please input a valid number'
      }
    }

    return errors
  },
  handleSubmit: (values, { props, resetForm, setSubmitting, setErrors }) => {
    // generates UUID
    values.id = uuidv4()

    if (values.is_coming === '1') {
      values.is_jkt = values.locations.includes('jkt') ? 1 : 0
      values.is_sg = values.locations.includes('sg') ? 1 : 0
    }

    fetch(formURL, { method: 'POST', body: getFormData(values) })
      .then(res => {
        console.log('Success: ', res)
        resetForm({
          name: '',
          locations: [],
          pax: ''
        })
      })
      .catch(err => console.log('Err: ', err))
  }
})(InnerForm)

export default () => (
  <div style={styles.container}>
    <h1 style={styles.title}>RSVP here</h1>
    <RSVPForm />
  </div>
)

const styles = {
  container: {
    backgroundColor: '#cbece4',
    height: '100%'
  },
  title: {
    margin: '0',
    padding: '1em',
    textAlign: 'center'
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr) 2em',
    gridGap: '.5em'
  },
  radioGroupIsComing: {
    gridColumn: '2 / span 3',
    gridRow: '1'
  },
  inputName: {
    gridColumn: '2 / span 3',
    gridRow: '2'
  },
  checkboxGroupLocations: {
    gridColumn: '2 / span 3',
    gridRow: '3'
  },
  inputPax: {
    gridColumn: '2 / span 3',
    gridRow: '4'
  },
  submitButton: {
    gridColumn: '3',
    gridRow: '5',
    width: '10em',
    alignSelf: 'center',
    justifySelf: 'center'
  }
}
