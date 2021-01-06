//! Regex 

// *Expression Flags (i: case insensitive ; g: global ; m: multiline ; u : unicode ; ) */

//? Single Characters
let c0 = /\w/g /* all characters between A-Z ; a-z ; and 0-9 */
let c1 = /\d/g /* all digit between 0-9 */
let c2 = /\s/g /* all spaces and tabs */
let c3 = /./g /* every thing*/
let c4 = /\b/g /*all special characters (spaces ,tabs , dot ...) and beginning of words*/
// NT : In Uppercase all single characters are revere

//? Quantifiers
//* '*' 0 or more time the character
let q1 = /re*/ /* get all won 'r' or 're' ,'ree' ...('e' is optional ), */
//* '+' 1 or more time the character
let q2 = /re+/  /* get all won 're' or more like 'ree' ,'reee' */
//* '?' 0 or 1 time the character
let q3 = /colou?rs?/ /*get word variation (u and s are optional)*/
//* '{n,N}' interval of character repetition
let q4 = /re{1,5}/  /* get all won 're' or 'ree' ... ('e' is optional ), */
//* '{n}' number of character repetition
let q5 = /\b\w{5}\b/g /* get all words of 5 character*/

//? Position 
//* '^' beginning of a line 
let p3 = /^\w+\b/ /* get all word at the beginning of a line*/
//* '$' end of a line  
let p2 = /\br\w+$/ /* get all word starting by 'r' at the end of a line*/

//? Character class []
// * everything in [...] is matched individually 
let cc1 = /[abc]/  /* match a or b or c */
//* NB: '-' and '^'  are special character in class
let cc2 = /[a-c]/  /* match a or b or c */
let cc3 = /[a-c0-5]/  /* match a or b or c or 0 or 1 or.. 5 */
let cc4 = /[^a-c]/  /* match anything not a or b or c*/

//? alternation  (|)
let a1 = /[\w.]+@\w*\.(net|org|com)/ /* pape@ndiaye.net or  pape.ndiaye@gmail.net and pape.ndiaye@nyu.com*/


//? Group
let g1 = /(l.{2})\s(r\d*)/ /* Groups : $1 = (l.{2}) ;   $2 = (r\d*)  */

//! Ex ::

// let r13 = /\br.*?\b/g /*all word started by "r" follow by anything*/
// let r13 = /\br[a-z]*?\b/g /*all word started by "r" follow by only characters between [a-z]*/
// let r9 = /\b\w{5}\b/g /*get all words of 5 character*/
// let r10 = /\w{4,}/g /*get all words of 4 or more letter*/
// let p3 = /^\w+\b/ /*get all word at the beginning of a line*/
// let p3 = /colou?rs?/ /*get word variation (u and s are optional)*/


// !############################################################################################
// !############################################################################################

//! Regex in JS 
let str = "reeef The fat cat color colours colors ran down the street . \n It was searchingfsdfsdf dsfsfsd fsdf sfsdfsdf sdf sdfsd fsd for a mouse to eat at 20:12."
let matchSrt = "344-456-4375 is an number and 467-566-6578 also 667.766.6668"


//* str.split(r)
/* give us an array of str how wer separated by a character indicated by r */
// console.log(str.split(/\W+/g));
//* str.replace(r)
/* creat a new str by replacing and don't alter the initial str*/
// console.log(matchSrt.replace(/(\d{3})[-.](\d{3})[-.]\d{4}/g, "$1$1"));
//NB: replace can be use whit an callback function who can do literally every thing
// we can access the groups inside the callback function 
const myCallback = (match) => {
    return parseInt(match) + 1
}
console.log(matchSrt.replace(/(\d{3})[-.](\d{3})[-.]\d{4}/g, (match, g1, g2) => {
    console.log(match);
    console.log(g1);
    console.log(g2);
    return parseInt(match) + 1
}));

// * r.test(str) 
/* test if r is in str and return true or false*/
// * str.match(r) 
/* creat an array of all word he got , match it use with '/g' global*/
// NB: for getting groups whit match using exec
// console.log(matchSrt.match(/\d{3}[-.]\d{3}[-.]\d{4}/g));

// * r.exec(s)
/* give you a new array of word and groups avery time you kale it until you get null*/
// var execRegex = /(\d{3})[-.](\d{3})[-.]\d{4}/g;
// var monTableau;
// while ((monTableau = execRegex.exec(matchSrt)) !== null) {
    // console.log(monTableau);
// }