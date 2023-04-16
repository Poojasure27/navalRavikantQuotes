// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
const person = "Naval Ravikant";

const quotes = [{
    quote: "Become the best in the world at what you do. Keep redefining what you do until this is true."
    
},{
     quote:"Ignore people playing status games. They gain status by attacking people playing wealth creation games."
     
},{
     quote: "Pick an industry where you can play long term games with long term people"
}, {
     quote: "Specific knowledge is knowledge that you cannot be trained for. If society can train you, it can train someone else, and replace you.",
    
},
{
     quote:"Building specific knowledge will feel like play to you but will look like work to others."
},
{
     quote: "Reading is faster than listening. Doing is faster than watching."
},{
     quote:"Apply specific knowledge, with leverage, and eventually you will get what you deserve."
},{
     quote:"An army of robots is freely available - it's just packed in data centers for heat and space efficiency. Use it."
},{
     quote:"Leverage is a force multiplier for your judgement."
}];


btn.addEventListener('click' , function(){
      let random = Math.floor(Math.random() * quotes.length);
      quote.innerText = quotes[random].quote;
    
})