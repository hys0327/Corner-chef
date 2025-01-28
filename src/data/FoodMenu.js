// 이미지.. 추후 db에서 가져오는 방식으로 변경
import kimchiSoup from '../styles/images/img-thumb-kimchisoup.png';
import creampasta from '../styles/images/img-thumb-creampasta.png';
import porkrice from '../styles/images/img-thumb-porkrice.png';
import maratang from '../styles/images/img-thumb-maratang.png';
// 일단 임시
// import ramen from '../styles/images/image-thumb-ramen.png';
// import sushi from '../styles/images/image-thumb-sushi.png';
// import hotpot from '../styles/images/image-thumb-hotpot.png';
// import steak from '../styles/images/image-thumb-steak.png';
// import bibimbap from '../styles/images/image-thumb-bibimbap.png';
// import udon from '../styles/images/image-thumb-udon.png';
// import dumpling from '../styles/images/image-thumb-dumpling.png';
// import pizza from '../styles/images/image-thumb-pizza.png';
// import friedrice from '../styles/images/image-thumb-friedrice.png';
// import lasagna from '../styles/images/image-thumb-lasagna.png';
// import curry from '../styles/images/image-thumb-curry.png';
// import pho from '../styles/images/image-thumb-pho.png';
// import tteokbokki from '../styles/images/image-thumb-tteokbokki.png';
// import tempura from '../styles/images/image-thumb-tempura.png';
// import burger from '../styles/images/image-thumb-burger.png';
// import paella from '../styles/images/image-thumb-paella.png';

// 메뉴 더미데이터
const FoodMenu = [
  {
    id: 1,
    category: '한식',
    name: '김치찌개',
    spiceLevel: 3,
    cookTime: '15 ~ 20분',
    price: '5,500원 ~ 7,800원',
    image: kimchiSoup,
  },
  {
    id: 2,
    category: '양식',
    name: '크림 파스타',
    spiceLevel: 2,
    cookTime: '20 ~ 25분',
    price: '3,500원 ~ 5,200원',
    image: creampasta,
  },
  {
    id: 3,
    category: '한식',
    name: '돼지국밥',
    spiceLevel: 3,
    cookTime: '17 ~ 32분',
    price: '4,200원 ~ 6,700원',
    image: porkrice,
  },
  {
    id: 4,
    category: '중식',
    name: '마라탕',
    spiceLevel: 3,
    cookTime: '12 ~ 25분',
    price: '6,200원 ~ 8,300원',
    image: maratang,
  },
  {
    id: 5,
    category: '일식',
    name: '라멘',
    spiceLevel: 2,
    cookTime: '10 ~ 15분',
    price: '7,500원 ~ 9,000원',
    image: '',
  },
  {
    id: 6,
    category: '일식',
    name: '스시',
    spiceLevel: 1,
    cookTime: '5 ~ 10분',
    price: '12,000원 ~ 15,000원',
    image: '',
  },
  {
    id: 7,
    category: '중식',
    name: '훠궈',
    spiceLevel: 4,
    cookTime: '25 ~ 40분',
    price: '20,000원 ~ 30,000원',
    image: '',
  },
  {
    id: 8,
    category: '양식',
    name: '스테이크',
    spiceLevel: 1,
    cookTime: '30 ~ 40분',
    price: '25,000원 ~ 35,000원',
    image: '',
  },
  {
    id: 9,
    category: '한식',
    name: '비빔밥',
    spiceLevel: 2,
    cookTime: '10 ~ 15분',
    price: '6,500원 ~ 8,000원',
    image: '',
  },
  {
    id: 10,
    category: '일식',
    name: '우동',
    spiceLevel: 1,
    cookTime: '8 ~ 12분',
    price: '4,500원 ~ 6,000원',
    image: '',
  },
  {
    id: 11,
    category: '중식',
    name: '만두',
    spiceLevel: 1,
    cookTime: '10 ~ 15분',
    price: '5,000원 ~ 7,000원',
    image: '',
  },
  {
    id: 12,
    category: '양식',
    name: '피자',
    spiceLevel: 1,
    cookTime: '15 ~ 20분',
    price: '10,000원 ~ 14,000원',
    image: '',
  },
  {
    id: 13,
    category: '중식',
    name: '볶음밥',
    spiceLevel: 2,
    cookTime: '10 ~ 15분',
    price: '5,500원 ~ 7,500원',
    image: '',
  },
  {
    id: 14,
    category: '양식',
    name: '라자냐',
    spiceLevel: 1,
    cookTime: '30 ~ 40분',
    price: '15,000원 ~ 18,000원',
    image: '',
  },
  {
    id: 15,
    category: '인도',
    name: '카레',
    spiceLevel: 3,
    cookTime: '20 ~ 30분',
    price: '8,000원 ~ 10,000원',
    image: '',
  },
  {
    id: 16,
    category: '베트남',
    name: '쌀국수',
    spiceLevel: 2,
    cookTime: '10 ~ 15분',
    price: '7,000원 ~ 9,000원',
    image: '',
  },
  {
    id: 17,
    category: '한식',
    name: '떡볶이',
    spiceLevel: 3,
    cookTime: '10 ~ 15분',
    price: '3,500원 ~ 5,000원',
    image: '',
  },
  {
    id: 18,
    category: '일식',
    name: '덴푸라',
    spiceLevel: 1,
    cookTime: '15 ~ 20분',
    price: '9,000원 ~ 11,000원',
    image: '',
  },
  {
    id: 19,
    category: '양식',
    name: '버거',
    spiceLevel: 2,
    cookTime: '10 ~ 15분',
    price: '6,000원 ~ 8,000원',
    image: '',
  },
  {
    id: 20,
    category: '스페인',
    name: '파에야',
    spiceLevel: 1,
    cookTime: '40 ~ 50분',
    price: '18,000원 ~ 22,000원',
    image: '',
  },
];

export default FoodMenu;
