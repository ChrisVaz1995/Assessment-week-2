/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = `Git is a software that collects files and is used for software development. Saves files and will archive previous files. `;
console.log(gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = `Github is a website that lets programmers publish their code on a public website. This is also used to collerbate work with other programmers and coworkers.`;
console.log(gitHubDefinition);
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    description: `it creates a local reposity witin the folder that is created`,
    code: `git init`,
};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    description: `the clone commannd copies anything that was uploaded in Github and inserts it into your machine`,
    code: `git clone REPO_URL`,
};
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
    description: `the status command gives you a informatoin about the current repo that you're using`,
    code: `git status`,
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE


const add = {
    description: `the add command adds files to your repo. This will keep track of all of the files that has been added `,
    code: `git add`,
};
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: `the commit command takes a screenshot of the files that you're currently using`,
    code: `git commit`,
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    description: `the push command puts your local commits onto Github`,
    code: `git push REPO_NAME `,
};