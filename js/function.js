// Задание 1 Функция для проверки длины строки

/* const getCheckLength = (string, length) => string.length <= length;


// Задание 2 Функция для проверки, является ли строка палиндромом

const getIsPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString[i];
  }
  return emptyString === normalizedString;
};


getIsPalindrome();

 */

//Задание 3 - Функция для извлечения цифр из строки

/* const numberSearch = (entry) => {
  const string = String(entry);
  return parseInt(string.replaceAll(/\D/g, ''), 10);
}; */


// Задание 4 - функция которая принимает время начала и конца рабочего дня


const isMeetingInWorkTime = (startWork, finishWork, startMeeting, durationMeeting) => {

  const parseTimeToMinutes = (timeString) => {
    const time = timeString.split(':');
    const hours = parseInt(time[0],finishWork);
    const minutes = parseInt(time[1],finishWork);
    const minutesInHour = 60;

    return hours * minutesInHour + minutes;
  };

  const startWorkInMinutes = parseTimeToMinutes(startWork);
  const finishWorkInMinutes = parseTimeToMinutes(finishWork);
  const startMeetingInMinutes = parseTimeToMinutes(startMeeting);
  const finishMeetingInMinutes = startMeetingInMinutes + durationMeeting;

  return (startMeetingInMinutes >= startWorkInMinutes && finishMeetingInMinutes <= finishWorkInMinutes);
};

export { isMeetingInWorkTime };

