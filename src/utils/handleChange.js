export const handleChange = (event, setName, setLastName) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name": {
        setName(value);
        break;
      }
      case "lastName": {
        setLastName(value);
        break;
      }

      default:
        return;
    }
  };