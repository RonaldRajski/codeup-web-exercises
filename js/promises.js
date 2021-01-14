// // fetch(url, {headers: {'Authorization': 'githubToken'}});
//
//
// let wait = (num) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve();
//         }, num)
//
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
//
// function getGithubUsernames(username) {
//     return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`, {
//         headers: {
//             'Authorization': githubToken,
//             'Accept': 'application/vnd.github.cloak-preview'
//         }
//     })
//         .then(response => response.json())
//     // .then(users => users.map(user => user.login));
// }
//
//
// console.log(getGithubUsernames());
// console.log(getGithubUsernames('ronaldrajski'))
//
//
//
// const lastCommit = (username) => {
//     return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`,
//         {headers: {
//                 'Authorization': githubToken,
//                 'Accept': 'application/vnd.github.cloak-preview'
//             }})
//         .then(response => response.json())
//         .then(response => {
//             //shows response object with which to reference most recent commit name and date in items[0]
//             console.log(response);
//             let name = response.items[0].commit.author.name;
//             let date = response.items[0].commit.author.date;
//             console.log(`Last commit was on ${date} by ${name}`)
//         });
// }
//
// console.log(lastCommit('ronaldrajski')); //Promise object

// daniel walkthrough


const url = "https://api.github.com/users/"
const events = "/events"

const getLastCommitDate = (username) => {
    let token = githubToken;
    return fetch(url + username + events, {headers: {'Authorization': token}})

        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.filter(event => event.type === "PushEvent")
        })
        .then(pushEvents => {
            console.log(pushEvents[0].created_at);
            return pushEvents[0].created_at;

        })
}
    console.log(getLastCommitDate('ronaldrajski'));
    console.log(getLastCommitDate('danielfryer'));
    console.log(getLastCommitDate('friday.next'));



const wait = (ms)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms);
        reject();
    })

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(5000).then(()=> console.log("When will we see this?"));




