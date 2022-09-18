import {getRandomPositiveInteger} from './util.js';
import {checkStringLength} from './util.js';

const PHOTO_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const NAMES = [
  'Васян',
  'Толик',
  'Колян',
  'Илюша',
  'Даша',
  'Степан'
]

const DESCRIPTION_CATALOGUE = [
'1 тут всякое писание',
'2 красивая фоточка',
'3 просто зафоткал',
'4 тыц тыц',
'5 пыш пыш',
'6 здесь могла быть ваша реклама',
'7 а тут не пойми что',
'8 не видно нифига',
'9 вот это у у меня получилось',
'10 лучше бы не фоткал вообще...',
'11 зачем это',
'12 машинки на фотке',
'13 красивости',
'14 пейзажи',
'15 людишки',
'16 людишки за работой',
'17 здесь текст',
'18 а ту ттекста нет',
'19 ехал грека через реку...',
'20 фотки фотки фоточки',
'21 пыш пыщ ',
'22 описание фотки',
'23 раз два три четыре',
'24 оп оп оп',
'25 туц туц'
]

//генерация одного коммента
function createComment (){
  return {
      id: getRandomPositiveInteger(1,10000),
      avatar: 'img/avatar-' + getRandomPositiveInteger(1,6) +'.svg',
      message: MESSAGES[getRandomPositiveInteger(0,MESSAGES.length-1)],
      name: NAMES[getRandomPositiveInteger(0,NAMES.length-1)]
  }
}

//генерация одной фоточки
function createPhoto (photoNumber){
  const generateComments = Array.from({length:getRandomPositiveInteger(1,5) }, createComment);
  return {
    id: photoNumber,
    url: 'photos/' + photoNumber + '.jpg',
    description: DESCRIPTION_CATALOGUE[photoNumber-1],
    likes: getRandomPositiveInteger(15,200),
    comments: generateComments
  }
}

//Создание каталога с фотками
let PhotoCatalogue = Array.from({length: PHOTO_COUNT});

  for(i=0;i<PHOTO_COUNT;i++){
    PhotoCatalogue[i] = createPhoto(i+1);
  }

  //const PhotoCatalogue = Array.from({length: PHOTO_COUNT}, createPhoto);


  export {PhotoCatalogue};