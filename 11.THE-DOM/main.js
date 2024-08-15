document.querySelector('.selectingElements li').style.fontWeight = "bold"; 

console.log(document.querySelector('a').attributes);

console.log(document.querySelector('a').getAttribute('href'));
console.log(document.querySelector('a').getAttribute('class'));

document.querySelector('a').setAttribute("href", "https://bing.com");
document.querySelector('a').setAttribute('class', "work1");
