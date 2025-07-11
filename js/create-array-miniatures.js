import { getRandomInteger, getRandomArrayElement } from './util.js';

// хранит данные которые известны до выполнения программы
import { NAMES, MESSAGES, MIN_LIKES, MAX_LIKES, MIN_COMMENTS, MAX_COMMENTS, COUNT_RANDOM_OBJECT } from './data.js';

const avatarRandomRange = {
  min: 0,
  max: 6,
};
// Функция для генерации случайного комментария
let commentRandomId = 1;
const createComment = () => ({
  id: commentRandomId++,
  avatar: `img/avatar-${ getRandomInteger(avatarRandomRange) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

// Функция для генерации массива фотографий id сообщений лайков и комментария
let photoRandomId = 1;
const createCommentObject = () => ({
  id: photoRandomId++,
  url: `photos/${ photoRandomId }.jpg`,
  description: getRandomArrayElement(MESSAGES),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments:  Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComment),
});

const getArrayMiniatures = () =>
  Array.from({ length: COUNT_RANDOM_OBJECT}, createCommentObject);

export { getArrayMiniatures };


