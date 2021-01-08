export default (props = {}) => ({
  ...Object.keys(props).reduce(
    (prev, key) => (prev[key] = props[key]) && prev,
    []
  )
});
