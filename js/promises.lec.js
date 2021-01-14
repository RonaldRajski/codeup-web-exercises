



// const myPromise = fetch('https://api.github.com/users');
// console.log(myPromise);
// myPromise.then(response=> console.log(response));
// myPromise.catch(error => console.error(error));


// 1st function is equivalent to the one below
const myPromise = fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));

// const swapiurl = "https://swapi.dev/api/planets/";
const pokeiurl = "https://pokeapi.co/api/v2/pokemon/"

document.getElementById("button").addEventListener("click",  () => {
    let id = document.getElementById("input").value;
    console.log("fetching: " + swapiurl + id);

    let promise = fetch(swapiurl + id)
        .then(data=>{
            console.log(data);
            // let name = data.name
            document.getElementById("output").innerText = name;
        })
            .catch(err=>{
                console.log(err);
            })
        })
})




