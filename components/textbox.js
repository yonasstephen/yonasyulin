export default ({
  error,
  name,
  onChange,
  onBlur,
  style,
  title,
  touched,
  value
}) => (
  <div style={Object.assign({}, style, styles.container)}>
    <label
      style={styles.label}
      htmlFor={`id-${name}`}>
      {title}
    </label>
    <input
      id={`id-${name}`}
      type='text'
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      style={styles.input}/>
    {touched && error && <div style={styles.error}>{error}</div>}
  </div>
)

const styles = {
  container : {
    display: 'grid',
    gridTemplateRows: '1fr 1fr'
  },
  error: {
    color: 'red'
  },
  label: {

  },
  input: {
    border: '1px solid transparent',
    borderRadius: '4px',
    boxShadow: '0 1px 3px 0 #e6ebf1',
    fontSize: '1em',
    height: '1em',
    outline: 'none',
    padding: '.6em .8em',
    transition: 'box-shadow 150ms ease',
  }
}
