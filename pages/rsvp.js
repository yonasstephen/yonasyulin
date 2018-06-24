import { Component } from 'react'
import { Formik, withFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import moment from 'moment'
import styled from 'styled-components'

import Button from '../components/button'
import TextBox from '../components/textbox'
import RadioButton from '../components/radiobutton'
import Checkbox from '../components/checkbox'
import { getFormData, uuidv4 } from '../utilities/helper'

import 'react-toastify/dist/ReactToastify.css'

const formURL = process.env.FORM_URL
const presenceOptions = [
  { caption: 'I will be there', value: 1 },
  { caption: "Sorry I can't make it", value: 0 }
]
const locationOptions = [
  { caption: 'Singapore, 8 Sep 2018 (11 AM)', value: 'sg' },
  { caption: 'Jakarta, 15 Sep 2018 (7 PM)', value: 'jkt' }
]

const SuccessPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const Subtitle = styled.h2`
  color: #1b9a8e;
  font-family: adlery_swash;
  font-size: 4em;
  margin: 0;
  padding: 1em;

  @media (max-width: 320px) {
    font-size: 3.5em;
  }
}
`

const AddToCalendarIcon = styled.img`
  height: 1em;
  margin-right: 0.3em;
`

function getEvents(locations) {
  if (!locations) return ''

  let comingEvents = []
  locations.forEach((location, index) => {
    if (events[location]) {
      comingEvents.push(events[location])
    }
  })
  return comingEvents
}

class InnerForm extends Component {
  componentDidUpdate() {
    window.addeventatc.refresh()
  }

  renderForm() {
    const {
      errors,
      form,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      setFieldValue,
      status,
      touched,
      values
    } = this.props
    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>RSVP</h1>
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
        <Button
          style={styles.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <img src="/static/img/bars.svg" style={styles.spinner} />
          )}
          <span style={{}}>Submit</span>
        </Button>
      </form>
    )
  }

  renderSuccessPage() {
    const { values } = this.props

    return (
      <SuccessPage>
        <Subtitle>Thank you for your RSVP!</Subtitle>
        {values.locations &&
          values.locations.indexOf('sg') !== -1 && (
            <div
              title="Add to Calendar (SG)"
              className="addeventatc"
              style={styles.addToCalendar}
            >
              Add to Calendar (SG)
              <span className="start">08/09/2018 11:00 AM</span>
              <span className="end">08/09/2018 01:00 PM</span>
              <span className="timezone">Asia/Singapore</span>
              <span className="calname">YY-SG</span>
              <span className="title">Yonas & Yulin - Holy Matrimony</span>
              <span className="location">
                Bukit Batok Presbyterian Church, 21 Bukit Batok St 11, Singapore
              </span>
              <span className="description">East Sanctuary 2nd Floor</span>
            </div>
          )}
        {values.locations &&
          values.locations.indexOf('jkt') !== -1 && (
            <div
              title="Add to Calendar (JKT)"
              className="addeventatc"
              style={styles.addToCalendar}
            >
              {/* <AddToCalendarIcon src="/static/img/calendar.svg" /> */}
              Add to Calendar (JKT)
              <span className="start">15/09/2018 07:00 PM</span>
              <span className="end">15/09/2018 09:00 PM</span>
              <span className="timezone">Asia/Jakarta</span>
              <span className="calname">YY-JKT</span>
              <span className="title">Yonas & Yulin - Wedding Reception</span>
              <span className="location">
                Hotel Ciputra, Jl. Letnan Jenderal S. Parman, West Jakarta
              </span>
              <span className="description">Dian Ballroom 6th Floor</span>
            </div>
          )}
      </SuccessPage>
    )
  }

  render() {
    const { values } = this.props
    const showForm = !this.props.status || !this.props.status.hasSubmitted
    return (
      <div style={{ height: '100%' }}>
        {showForm && this.renderForm()}
        {!showForm && this.renderSuccessPage()}

        <ToastContainer />
      </div>
    )
  }
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
  handleSubmit: (
    values,
    { props, resetForm, setSubmitting, setErrors, setStatus }
  ) => {
    // generates UUID
    values.id = uuidv4()

    if (values.is_coming === '1') {
      values.is_jkt = values.locations.includes('jkt') ? 1 : 0
      values.is_sg = values.locations.includes('sg') ? 1 : 0
    }

    fetch(formURL, { method: 'POST', body: getFormData(values) })
      .then(res => {
        setSubmitting(false)
        // Don't reset values.locations cos it's used by Add to calendar
        // resetForm({
        //   name: '',
        //   locations: [],
        //   pax: ''
        // })

        // pass form submission state to lower order component
        setStatus({ hasSubmitted: true })
      })
      .catch(err => {
        setSubmitting(false)
        setErrors(err)
        toast(`Oops! There is an error in your submission (err: ${err})`, {
          className: 'toast-background-err',
          bodyClassName: 'toast-body',
          progressClassName: 'toast-progress-err'
        })
      })
  }
})(InnerForm)

export default () => (
  <div style={styles.container}>
    <RSVPForm />
  </div>
)

const styles = {
  container: {
    backgroundColor: '#cbece4',
    minHeight: '100%'
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    gridTemplateRows: 'repeat(5, auto) 2em',
    gridGap: '1.5em',
    paddingBottom: '1.5em'
  },
  title: {
    fontFamily: 'adlery_swash',
    fontSize: '4em',
    margin: '0',
    padding: '1em .5em .5em',
    textAlign: 'center',
    gridColumn: '2 / span 3',
    gridRow: '1'
  },
  radioGroupIsComing: {
    gridColumn: '2 / span 3',
    gridRow: '2'
  },
  inputName: {
    gridColumn: '2 / span 3',
    gridRow: '3'
  },
  checkboxGroupLocations: {
    gridColumn: '2 / span 3',
    gridRow: '4'
  },
  inputPax: {
    gridColumn: '2 / span 3',
    gridRow: '5'
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: '#d78380',
    color: 'white',
    display: 'flex',
    fontSize: '1em',
    gridColumn: '3',
    gridRow: '6',
    justifySelf: 'center',
    lineHeight: '2em',
    padding: '0.2em 1em',
    width: 'auto'
  },
  spinner: {
    alignSelf: 'center',
    height: '1.5em',
    marginRight: '.5em'
  },
  addToCalendar: {
    border: 'none',
    fontFamily: 'tajawal',
    margin: '.2em'
  }
}
