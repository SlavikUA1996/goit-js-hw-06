const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery')

const markup = images
	.map(image => `<li><img class="picture" src=${image.url} width = "300" height = "200" alt='${image.alt}'></img></li>`)
	.join('')
// console.log(markup)
  list.insertAdjacentHTML('beforeend', markup)
      
const pictures = document.querySelectorAll('.picture')

list.style.listStyle = 'none';
list.style.display = 'inline-flex';
list.style.gap = '10px'



// const list = document.querySelector('.gallery');

// const imgEl = images
//   .map(image => `<li><img class = "add-img" src = ${image.url}> width = "150" height = "100" alt = '${image.alt}'></img></li>`)
// .join('');

// list.insertAdjacentElement('beforeend', imgEl);

// const picture = document.querySelectorAll('.add-img');

// console.log(imgEl)



// const list = document.querySelector('#gallery');

// images.forEach(element => {
//   list.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src = "${element.url}" alt = "${element.alt}"  width = "150" height = "100" /></li>`,
//   );
// });
// console.log(list)

