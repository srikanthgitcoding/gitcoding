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

const arr = Object.entries(backendErrors).map(([key, value]) => {
  const str = value.errors.map((message) => message.message).join(", ");
  const capitalize = key.charAt(0).toUpperCase() + key.slice(1);
  return `${capitalize}: ${str}`;
});

console.log(arr);
