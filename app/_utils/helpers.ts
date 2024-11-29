//  export const isValidPhoneNumber = (phoneNumber) => {
//     console.log(phoneNumber)
//     // Example regex for your format
//     const phoneRegex = /^\+\d{3} \d{3} \d{3} \d{3}$/;
//     return phoneRegex.test(phoneNumber);
//   };

export const capitalise = (string: string) => {
  const firstLetter = string.substring(0, 1).toUpperCase();
  return `${firstLetter}${string.substring(1)}`;
};
