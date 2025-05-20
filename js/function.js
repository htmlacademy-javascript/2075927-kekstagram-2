const getCheckLength = (string, length) => string.length <= length;

getCheckLength('ffff', 33);


const getIsPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString[i];
  }
  return emptyString === normalizedString;
};


getIsPalindrome();

