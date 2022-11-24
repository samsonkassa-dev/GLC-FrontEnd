export const validateInputs = (name, value) => {
  switch (name) {
    case 'email':
      const passed =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
      if (!passed) return 'Please enter a valid email';
      return null;
    case 'password':
      if (value.length >= 8) return null;
      else return 'Password should be 8 or more characters';
    default:
      if (/^ *$/.test(value)) return 'This field can not be empty';
      return null;
  }
};
