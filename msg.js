/*
    1 Create a function for select randomly a message.
    2 Return the messages
    3 Call the function
*/

// IMPORTOK

const fs = require('fs');
const fs_extra = require('fs-extra');
const path = require("path"); 

console.log('Test is running!');

// task 0 create a function to open a doc file

const open_doc = (path) => {
    let data = fs.readFileSync(path).toString().split("\n");

    console.log('Opening document!');
    console.log('Read out :\n\n'+data);
    return 0
}

const rand_sel_msg = () => {
    console.log('Function is running!');
    return 0;
}

// task 1 change to fedora => ubuntu crashed
// tones of documentation

// task 2 fedora install NodeJS
// task 3 fedora install Express

// START Code!

open_doc('./data/astrology.txt');
rand_sel_msg();