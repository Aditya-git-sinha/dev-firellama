const capitalizeWords = input => input.replace(/\b\w+/g, word =>
  /^[a-zA-Z]/.test(word) ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word
);

export { capitalizeWords };