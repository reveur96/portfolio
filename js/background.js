const images = ['01.jpg','02.jpg','03.jpg'];

// const chosenImage = images[Math.floor(Math.random()* images.length)];
// const main = document.querySelector('#main');

// const bgImage = document.createElement('img');

// bgImage.src = `./images/${chosenImage}`;

// document.body.appendChild(bgImage);


const body = document.querySelector('body');
const createImg = () => {
  // <img> 요소를 만듭니다.
 
  const img = document.createElement('img');
  // <img> src, alt 값을 지정하고 'bgImg' 클래스를 추가합니다.
  img.src = `./images/${ images }`;
  img.alt = 'background images';
  img.classList.add('bgIme');
  // <body>에 <img> 삽입
  body.prepend(img);
};
const getRandom = () => {
    // 이미지 개수. 얼마든지 변경 가능.
    // 1 부터 5 까지의 랜덤 숫자 만들기
    let num = Math.floor(Math.random() * images.length ) + 1;
    // 이미지 생성함수 호출
    createImg(num);
}
// 마지막으로 getRandom 함수 호출
 getRandom();