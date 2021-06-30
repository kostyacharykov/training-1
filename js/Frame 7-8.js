const podcasts = [
  {
    title: '48 Laws of Power',
    author: 'Robert Greene',
    image: 'img/1 photo.png',
  },
  {
    title: 'Zero to One',
    author: 'Peter Ziel With Black',
    image: 'img/2 photo.png',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: 'img/3 photo.png',
  },
  {
    title: 'Think Like Monk',
    author: 'Jay Shetty',
    image: 'img/4 photo.png',
  },
];

const books = [
  {
    title: 'Green Light',
    author: 'Matthew McConaughey',
    image: 'img/5 photo.png',
  },
  {
    title: 'A Promised Land',
    author: 'Barak Obama',
    image: 'img/6 photo.png',
  },
  {
    title: 'Just as I Am',
    author: 'Cicely Tyson',
    image: 'img/7 photo.png',
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    image: 'img/8 photo.png',
  },
];

function fillBlock(elementsArray, blockSelector) {
  let stringForHtml = '';

  elementsArray.forEach(function(item) {
    stringForHtml += `<div class="card">
      <img src='${item.image}' class='cardimage'>
      <div class='play'>
          <img src='img/Vector 1.svg' class='playimg'>
      </div>
      <div class='song'>
          <h2 class='titlealbym'>${item.title}</h2>
          <a href="#" class='author'>${item.author}</a>
      </div>
    </div>`;
  });
  
  document.querySelector(blockSelector).innerHTML = stringForHtml;
}

fillBlock(podcasts, '.cardmargin1');
fillBlock(books, '.cardmargin2');

const played = [
  {
  numberr: '01',
  imgthumb: 'img/Thumb 1.svg',
  titlealbymplayed: 'Everything that remains',
  authorplayed: 'Chapter 3',
  time: '12:45',
  },
  {
  numberr: '02',
  imgthumb: 'img/Thumb 2.svg',
  titlealbymplayed: 'A Time for Mercy',
  authorplayed: 'Last Chapter',
  time: '03:51',
  },
  {
  numberr: '03',
  imgthumb: 'img/Thumb 3.svg',
  titlealbymplayed: 'Rhythm of war',
  authorplayed: 'Chapter 14',
  time: '09:47',
  },
];

let testString3 = '';

played.forEach(function(item) {
  testString3 += `<div class='row'>
  <div class="halfleft">
      <h3 class="numberr">${item.numberr}</h3>
      <div class="titlethumb">
          <img src='${item.imgthumb}' class="imgthumb">
          <div class="desc">
              <h4 class='titlealbymplayed'>${item.titlealbymplayed}</h2>
          <a href="#" class='authorplayed'>${item.authorplayed}</a>
          </div>
      </div>
  </div>
  <div class='halfright'>
      <div class="time">${item.time}</div>
      <div class="icons">
          <div class='play2'>
              <img src='img/Vector 1.svg' class='playimg'>
          </div>
          <div class='plus'>
              <img src='img/Plus.svg' class='rectangle'>
          </div>
      </div>        
  </div>
</div>`;
});

document.querySelector('.cardmargin3').innerHTML = testString3;
