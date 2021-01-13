const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


let threeLanguages = users.filter(user => user.languages.length >=3);

console.table(threeLanguages);


// Use .map to create an array of strings where each element is a user's email address

        let emails =[];

        users.map(user => emails.push(user.email));

        console.log(emails);
        console.table(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    let totalUsersExperience = users.reduce(((totalExperience, user) => totalExperience += user.yearsOfExperience), 0);

    let averageUsersExperience = totalUsersExperience/ users.length;

console.log(averageUsersExperience);

// Use .reduce to get the longest email from the list of users.

let longestEmail = "";
    users.reduce(((letterCount, user) => {
        if(user.email.length > letterCount){
            letterCount = user.email.length;
            longestEmail = user.email;
        }
        return letterCount
    }), 0);

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce(((str, user) => str += `${user.name}`), 'Your instructors are : ');

console.log(instructors);

// Use .reduce to get the unique list of languages from the list of users.


let knownLanguages = users.reduce((languages, user) =>{
    for(let language of user.languages){
        if(!languages.includes(languages)){
            languages.push(language)
        }
    }
    return languages;
}, []);

console.log(knownLanguages);
console.table(knownLanguages);

