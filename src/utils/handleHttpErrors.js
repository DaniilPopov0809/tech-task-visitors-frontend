const handleHttpErrors = (status) => {
  switch (status) {
    case 400: {
      return "Name and last name mustn't be less than 10 characters";
    }
    case 500: {
      return "Please try again later";
    }
    case 404: {
     return "Not found";
    }
    default: {
      return "Oops something wrong...";
    }
  }
};

export default handleHttpErrors;
