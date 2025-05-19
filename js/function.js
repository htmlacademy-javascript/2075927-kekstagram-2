function checkStringLength(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('тестовая строка', 20);

const checkLength = (string, length) => string.length <= length;

checkLength('ffff', 33);


const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString[i];
  }
  return emptyString === normalizedString;
};


isPalindrome();

