import styled from 'styled-components'

const Container = styled.div`
  display: block;
  position: relative;
  padding-left: 1.5em;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 1.2em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`
const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1em;
  width: 1em;
  background-color: ${props => (props.checked ? '#2C9EDA' : '#fff')};

  &:hover {
    background-color: ${props => (props.checked ? '#2C9EDA' : '#eee')};
  }

  &::after {
    content: '';
    position: absolute;
    display: ${props => (props.checked ? 'block' : 'none')};
    left: 25%;
    top: 40%;
    width: 25%;
    height: 50%;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg) translate3d(-50%, -50%, 0);
    -ms-transform: rotate(45deg) translate3d(-50%, -50%, 0);
    transform: rotate(45deg) translate3d(-50%, -50%, 0);
  }
`
const Checkbox = ({ id, caption, checked, name, onBlur, onChange, value }) => (
  <Container>
    <label htmlFor={id}>
      {caption}
      <Input
        type="checkbox"
        checked={checked}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        value={value}
      />
      <Checkmark checked={checked} />
    </label>
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
    color: 'red',
    marginTop: '.5em'
  },
  title: {
    color: '#14735c',
    fontSize: '1.4em',
    fontWeight: 'bold'
  }
}
