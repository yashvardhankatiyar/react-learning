const ErrorMessage = (props) => {
  return <>{props.items.length === 0 && <h3> I m hungry. </h3>}</>;
};

export default ErrorMessage;
