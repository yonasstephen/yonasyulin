import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${props => props.color};
  font-weight: bold;
  outline: none;
  padding: 1em 2em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`

export default Button
