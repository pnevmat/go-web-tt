const validator = {
  nameValidator: (text, setValid) => {
    if (text === '') {
      return setValid(false);
    } else {
      return setValid(true);
    }
  },

  emailValidator: (text, setValid) => {
    if (text === '') {
      return setValid(false);
    } else if (text !== '') {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const result = emailRegex.test(text);
      return setValid(result);
    }
  },
};

export default validator;
