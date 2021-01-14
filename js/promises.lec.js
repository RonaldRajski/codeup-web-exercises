



const myPromise = fetch('https://api.github.com/users');
console.log(myPromise);
myPromise.then(response=> console.log(response));
myPromise.catch(error => console.error(error));

fetch('https://api.github.com/users');

