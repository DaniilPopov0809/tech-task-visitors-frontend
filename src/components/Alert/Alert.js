import Alert from "react-bootstrap/Alert";

function showAlert(variant, text) {
  return (
    <Alert key={variant} variant={variant}>
      {text}
    </Alert>
  );
}

export default showAlert;
