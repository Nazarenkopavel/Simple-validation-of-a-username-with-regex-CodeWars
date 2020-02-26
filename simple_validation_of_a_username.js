/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/
function validateUsr(username) {
  return /^([a-z]|[\d]|[_]){4,16}$/.test(username);
}
/*
  function validateUsr(n) {
    return n.search(/[a-z\d_]{4,16}$/) === 0 ? true : false;
  }
  */

console.log(validateUsr("Hass"));
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas"));
console.log(validateUsr(" "));
console.log(validateUsr("p1pp1"));
console.log(validateUsr("asd43_34"));
