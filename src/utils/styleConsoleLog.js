export default (
  msg = "",
  cssStyles = `
    color: red;
    font-weight: 800;
    text-decoration: underline;
    padding: 200px 0;
    font-size: 24px;
  `
) => console.log(`%c${msg}`, `${cssStyles}`);
