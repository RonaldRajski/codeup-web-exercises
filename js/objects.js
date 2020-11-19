(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    var person = {
        firstName:"Ronald",
        lastName:"Rajski"
    }



    console.log(person.firstName); // "Ronald"
    console.log(person.lastName); // "Rajski"




    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    // redone with this.name
    person.sayHello = function (){
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }

    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // function cost(shopper){
    //     console.log(shopper.name);
    //     console.log("Spent: $" + shopper.amount);
    //         if(shopper.amount >200){
    //             console.log(shopper.amount * .12);
    //             console.log(shoppers.name + `Total of: ${shopper.amount - shopper.amount * .12}`);
    //         }
    //         else {
    //             console.log("no discount");
    //             console.log(shopper.amount);
    //         }
    // }


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


        shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {

            console.log(shopper.name + "'s bill was $" + shopper.amount + ".They received a discount of $" + discount +
                "and their total was $" + total + ".");

        }
        else{
                console.log("Howdy there " + shopper.name + "! Your total before any discounts is $" +shopper.amount.toFixed(2) +
                    "today is $" + shoper.amount.toFixed(2)+ ".");
            }

        })

// console.log("Howdy there " + shopper.name + "!Your total before any discounts is $" + shopper.amount.toFixed(2) + ".Since that's over $200 , you            will be receiving a 12% discount, meaning your final total today is $" + shopper.amount.toFixed(2) + ".");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    function addBook(title, fName, lName, booksArr) {
        var obj = {
            title: title,
            author : {
                firstName = fName,
                lastName = lName
            }

        };
        Books.Arr.push(obj);
        return booksArr;
    }

    var books = [
        {
            title: "War of the Worlds",
            owner: {
                firstName: "Jules",
                lastName: "Verne"
            }
        },
        {
            title: "Mustang",
                author: {
                    firstName: "Carol",
                    lastName: "Shelby"
            }
        },
        {
            title: "Motorcycle",
                author: {
                    firstName: "John",
                    lastName: "Suzuki"
    }
},
        {

            title: "How to drive a Scooter",
            author: {
                firstName: "Honda",
                lastName: "Go Slowly"
            }
        },
        {
            title: "A people's history of the US",
            author: {
                firstName: "Howard",
                lastName: "Zinn"
            }
        },

    ];

    addBook("The Art of War", "Sun", "Tzu", books);

    books.forEach(function (book){
        console.log("Book #" + (index + 1) +"\n" +showBookInfo(book));
    }

    // function library(){
    //     for (var i = 1; i <books.length; i++) {
    //         console.log(this.title + " " + this.author.firstName + " "+
    //         this.author.lastName);
    //     }
    // }





    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function showBookInfo(book){
        var str ="Title: "+book.title + "\n";
        str += "Author: " + book.author.firstName + " " + book.author.lastName;
        return str;
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, genre, author) {
        const book = {
            title: title,
            genre: genre,
            author: author,
            bookDetails: function() {
                return `Name: ${book.author} | Title: ${book.title} | Genre: ${book.genre}.`
            },
        }
        return book
    }

    const book1 = createBook("book_one", "sci-fi", "Ibas Majid")
    const book2 = createBook("book_two", "fantasy", "Alice M.")






})();