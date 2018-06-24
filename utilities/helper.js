import moment from 'moment'

export const icsDateFormat = 'YYYYMMDD[T]HHmmss[Z]'

export const getFormData = object =>
  Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key])
    return formData
  }, new FormData())

export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

export function generateICSURL(events) {
  if (!events || events.length < 1) return ''

  let ics =
    'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:yycalendar\r\nMETHOD:PUBLISH\r\n'
  events.forEach((event, index) => {
    const vevent =
      `BEGIN:VEVENT\r\nUID:yy-${index}\r\n` +
      `DTSTAMP:${moment.utc().format(icsDateFormat)}\r\n` +
      `DTSTART:${escapeICS(event.start_date)}\r\n` +
      `DTEND:${escapeICS(event.end_date)}\r\n` +
      `SUMMARY:${escapeICS(event.summary)}\r\n` +
      `LOCATION:${escapeICS(event.location)}\r\n` +
      `DESCRIPTION:${escapeICS(event.description)}\r\n` +
      `END:VEVENT\n`
    ics += escape(vevent)
  })
  ics += 'BEGIN:VCALENDAR'
  return ics
}

function escapeICS(value) {
  if (!value) return value

  return value.replace(/,/gi, '\\,')
}
