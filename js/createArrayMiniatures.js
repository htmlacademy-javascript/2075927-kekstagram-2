import { createRandomIdRangeGenerator ,getRandomInteger } from './util.js';

// хранит данные которые известны до выполнения программы
import { NAMES, COMMENTS, DESCRIPTIONS } from './data.js';

// генератор для id фотографий
const PHOTO_ARRAY_SIZE = 25;

//функция которая возвращает рандомный элемент массива
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getPhotoID = createRandomIdRangeGenerator(1, 26);
const generateCommentId = createRandomIdRangeGenerator(1, 26);
const getNumberPhoto = createRandomIdRangeGenerator(1, 26);

// Функция для генерации случайного комментария
const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

// Функция для генерации массива фотографий
const createPhotoDescription = () => ({
  id: getPhotoID(),
  url: `photo/${getNumberPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComments),
});

const getArrayMiniatures = () =>
  Array.from({ length: PHOTO_ARRAY_SIZE}, createPhotoDescription);

export { getArrayMiniatures };
