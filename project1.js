// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "The best way to Find Yourself is to Love Yourself",
    person: 'pooja'
},{
     quote:" hello, how are you!!",
     person: 'sandhya'
},{
     quote: "I love coding its really fun",
     person: 'just me'
}, {
     quote: "Your Time is Limited make use of it wisely",
     person: 'someone'
},];


btn.addEventListener('click' , function(){
      let random = Math.floor(Math.random() * quotes.length);
      quote.innerText = quotes[random].quote;
      person.innerText = quotes[random].person;
})