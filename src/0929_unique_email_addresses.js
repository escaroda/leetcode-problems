/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const unique = new Set();
  for (const email of emails) {
    const [name, domain] = email.split('@');
    unique.add(name.split('+')[0].replaceAll('.', '') + '@' + domain);
  }
  return unique.size;
};
