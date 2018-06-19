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
  border-radius: 50%;
  background-color: ${props => (props.checked ? '#2C9EDA' : '#fff')};

  &:hover {
    background-color: ${props => (props.checked ? '#2C9EDA' : '#eee')};
  }

  &::after {
    content: '';
    position: absolute;
    display: ${props => (props.checked ? 'block' : 'none')};
    top: 50%;
    left: 50%;
    width: calc(40% - 1px);
    height: 40%;
    border-radius: 50%;
    background: white;
    -webkit-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
  }
`

const RadioButton = ({
  id,
  caption,
  checked,
  name,
  onBlur,
  onChange,
  value
}) => (
  <Container>
    <label htmlFor={id}>
      {caption}
      <Input
        type="radio"
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
  selectedValue,
  title,
  touched
}) => {
  const renderRadiobuttons = () =>
    options.map(({ caption, value }) => (
      <RadioButton
        caption={caption}
        checked={selectedValue == value}
        id={`id-${name}-${value}`}
        key={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
    ))

  return (
    <div>
      <div style={styles.title}>{title}</div>
      {renderRadiobuttons()}
      {error && <div style={styles.error}>{error}</div>}
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
