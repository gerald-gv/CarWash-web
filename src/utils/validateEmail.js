export const emailRegex = /^([\daA-zZ_\.-]+)@([\daA-zZ\.-]+)\.([aA-zZ\.]{2,6})$/;

export function isValidEmail(email) {
  return emailRegex.test(email);
}