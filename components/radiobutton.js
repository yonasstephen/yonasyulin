import styled from 'styled-components'

const Container = styled.div``

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
      <input
        type="radio"
        checked={checked}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        value={value}
      />
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
    fontSize: '1.4em',
    fontWeight: 'bold'
  }
}
