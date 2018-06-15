import styled from 'styled-components'

const Container = styled.div`

`

const RadioButton = ({
  id,
  caption,
  name,
  value
}) => (
  <Container>
    <label htmlFor={id}>{caption}</label>
    <input type='radio' id={id} name={name} value={value} />
  </Container>
)

export default ({
  error,
  name,
  onChange,
  onBlur,
  options,
  style,
  touched,
}) => (
  options.map(({caption,name,value}) => (
    <RadioButton
      caption={caption}
      id={`$id-${name}`}
      name={name}
      value={value} />
  ))
)
