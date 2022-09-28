let row = document.querySelector('.row')
let images = [
    {
    id: "one",
      img: './images/image 1.png' ,
        title: 'Syltherine',
          subtitle: 'Stylish cafe chair' ,
        price: 'Rp 2.500.000' ,
      line:'Rp 3.500.000',
    button:'button1'
    },
    {
    id: 'two',
      img: '/images/image 2.png',
        title: 'Leviosa',
          subtitle: 'Stylish cafe chair',
        price:'Rp 2.500.000',
      line:'.',
    button:'button2'
    },
    {
    id: 'three',
      img: './images/image 3.png',
        title: 'Lolito',
          subtitle: 'Luxury big sofa',
        price:'Rp 7.000.000' ,
      line:'Rp 14.000.000',
    button:'button3'
    },
    {
    id: 'four',
      img: './images/image 4.png',
        title: 'Respira',
          subtitle: 'Minimalist fan',
        price:'Rp 500.000',
      line:'.',
    button:'button4'
    },
    {
    id: 'five',
      img: './images/image 6.png',
        title: 'Grifo',
          subtitle: 'Night lamp',
        price:'Rp 1.500.000',
      line:'.',
    button:'button5'
    },
    {
    id: 'six',
      img: './images/image 7.jpg',
        title: 'Muggo',
          subtitle: 'Small mug',
        price:'Rp 150.000',
      line:'.',
    button:'button6'
    },
    {
    id: 'seven',
      img: './images/image 8.png',
        title: 'Pingky',
          subtitle: 'Cute bed set',
        price:'Rp 7.000.000',
      line:'Rp 14.000.000',
    button:'button7'
    },
    {
    id: 'eight',
      img: './images/image 9.png',
        title: 'Potty',
          subtitle: 'Minimalist flower pot',
        price:'Rp 500.000',
      line:'.',
    button:'button8'
    }
]


images.forEach ((item) => {
    row.innerHTML += 
    `<div class="card" id="${item.id}">
        <img class="card-img" src="${item.img}">
            <p class="card-title" id = 'iner'>${item.title}</p>
                <p class="text-title" id = 'iner'>${item.subtitle}</p>
                    <p class="title" id = 'iner'>${item.price}</p>
            <p class="line">${item.line}</p>
        <button class = "${item.button}">Remove</button>
    </div>`
})
const h1 = document.createElement('h1');
    h1.innerHTML = `Our Products`;
        row.before (h1);

const newElement = document.createElement('div')
    row.after(newElement)
        newElement.className = 'linkbtn'

const link = document.createElement('a')
    link.innerHTML = 'Show More'
        newElement.append (link)
            link.href = '#';
                link.className = 'btn'

////////////////////////////////////////////////// JavaScript 6 lesson (H/W)    

const btn1 = document.querySelector('.button1')
btn1.addEventListener('click',function() {
  const one = document.querySelector('#one')
  one.remove(one.remove)
})
const btn2 = document.querySelector('.button2')
btn2.addEventListener('click',function() {
  const two = document.querySelector('#two')
  two.remove(two.remove)
})
const btn3 = document.querySelector('.button3')
btn3.addEventListener('click',function() {
  const three = document.querySelector('#three')
  three.remove(three.remove)
})
const btn4 = document.querySelector('.button4')
btn4.addEventListener('click',function() {
  const four = document.querySelector('#four')
  four.remove(four.remove)
})
const btn5 = document.querySelector('.button5')
btn5.addEventListener('click',function() {
  const five = document.querySelector('#five')
  five.remove(five.remove)
})
const btn6 = document.querySelector('.button6')
btn6.addEventListener('click',function() {
  const six = document.querySelector('#six')
  six.remove(six.remove)
})
const btn7 = document.querySelector('.button7')
btn7.addEventListener('click',function() {
  const seven = document.querySelector('#seven')
  seven.remove(seven.remove)
})
const btn8 = document.querySelector('.button8')
btn8.addEventListener('click',function() {
  const eight = document.querySelector('#eight')
  eight.remove(eight.remove)
})