// Format backend validation message to frontend format

const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};
const test = Object.entries(backendErrors).map(([key, value]) => {
  let keys = key.charAt(0).toUpperCase() + key.slice(1);
  let values = value.errors.map((error) => error.message).join("/ ");
  return `${keys}: ${values}`;
});

console.log(test);
// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]
