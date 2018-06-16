import styled from 'styled-components'

const Container = styled.div``

const Checkbox = ({ id, caption, checked, name, onBlur, onChange, value }) => (
  <Container>
    <input
      type="checkbox"
      checked={checked}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
      value={value}
    />
    <label htmlFor={id}>{caption}</label>
  </Container>
)

export default ({
  error,
  name,
  onBlur,
  onChange,
  options,
  selectedValues,
  title,
  touched
}) => {
  const handleCheckboxChange = e => {
    const target = e.currentTarget
    let valueArray = selectedValues || []
    if (target.checked) {
      valueArray.push(target.value)
    } else {
      valueArray.splice(valueArray.indexOf(target.value), 1)
    }

    // calls setFieldValue
    onChange(name, valueArray)
  }

  const renderCheckboxes = () =>
    options.map(({ caption, value }) => (
      <Checkbox
        caption={caption}
        checked={selectedValues && selectedValues.includes(value)}
        id={`id-${name}-${value}`}
        key={value}
        name={name}
        onBlur={onBlur}
        onChange={handleCheckboxChange}
        value={value}
      />
    ))

  return (
    <div>
      <div style={styles.title}>{title}</div>
      {renderCheckboxes()}
      {touched && error && <div style={styles.error}>{error}</div>}
    </div>
  )
}
const styles = {
  error: {
    color: 'red'
  },
  title: {
    fontWeight: 'bold'
  }
}
