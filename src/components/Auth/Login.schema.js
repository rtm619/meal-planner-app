export default {
  email: {
    type: 'text',
    name: 'user-email',
    label: 'Please enter your registered Email ID',
    validation: /^[a-z0-9._-]{3,20}@[a-z0-9-]{3,20}.com$/,
    errorText: 'Please enter a valid email address.',
    placeholder: '',
  },
  password: {
    type: 'password',
    name: 'user-password',
    label: 'Please enter your password',
    validation: /^[a-zA-Z0-9._*&,/()^%$#@+=><?-]{8,20}$/,
    errorText: 'Password must have a length of 8 - 20 characters',
    placeholder: '',
  }
}