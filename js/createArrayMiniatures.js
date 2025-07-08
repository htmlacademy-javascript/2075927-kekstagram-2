import { getRandomInteger } from './util.js';

// хранит данные которые известны до выполнения программы
import { NAMES, MESSAGES, MIN_LIKES, MAX_LIKES, MIN_COMMENTS, MAX_COMMENTS, COUNT_RANDOM_OBJECT } from './data.js';

//функция которая возвращает рандомный элемент массива
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

// Функция для генерации случайного комментария
const createComment = () => ({
  id: getRandomInteger(0, 25),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Функция для генерации массива фотографий id сообщений лайков и комментария
const createCommentObject = () => ({
  id: getRandomInteger(0, 26),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(MESSAGES),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments:  Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComment),
});

const getArrayMiniatures = () =>
  Array.from({ length: COUNT_RANDOM_OBJECT}, createCommentObject);

export { getArrayMiniatures };
