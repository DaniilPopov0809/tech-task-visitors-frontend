const handleHttpErrors = (status) => {
  switch (status) {
    case 400: {
      return "Name and last name mustn't be less than 10 characters";
    }
    case 401: {
      return "Unauthorized";
    }
    case 404: {
      return "Not found";
    }
    case 500: {
      return "Please try again later";
    }
    default: {
      return "Oops something wrong...";
    }
  }
};

export default handleHttpErrors;
