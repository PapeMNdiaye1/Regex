let str = "reeef The fat cat color colours colors ran down the street . \n It was searchingfsdfsdf dsfsfsd fsdf sfsdfsdf sdf sdfsd fsd for a mouse to eat at 20:12."

/**simpleSearch and infos
*Expression Flags (i: case insensitive ; g: global ; m: multiline ; u : unicode ; ) */

let r1 = /ea/gi;

/*  */

console.log(str.match(/^\w+\b/)); /* get all */
// console.log(str.search(r1)); /* get index of first */
// console.log(str.replace(r1, "THE Coder")); /* replace by */
// console.log(r1.exec(str));/* get property */
// console.log(r1.test(str)); /* see if word is in str */

let r2 = /e+/g /* get all won 'e' or more like 'ee' ,'eee' */
let r3 = /ea?/g /* get all won 'e' or 'ea'  ('a' is optional ), */
let r4 = /re*/g /* get all won 'r' or 're' ,'ree' ...('e' is optional ), */
let r5 = /.at/g /* get all 'Xat' X=anyCharacter */
let r6 = /\w/g /* get any character "not space and tab" */
let r7 = /\s/g /* get any not character "space and tab " */
let r8 = /\d/g /* get any digit " */

//* #####################################################

let r9 = /\b\w{5}\b/g /* get all words of 5 character*/
let r10 = /\w{4,}/g /* get all words of 4 or more letter*/
let r11 = /\w{2,5}/g /* get all words between 2 and 5 letter*/
let r12 = /.{1,2}/g /* split character tow by tow*/
let r13 = /\br.*?\b/g /*all word started by "r" follow by anything */
let r14 = /\br[a-z]*?\b/g /*all word started by "r" follow by only characters between [a-z]*/

// console.log(str.match(r9));

// console.log(str.match(/\D/g));

// console.log(str.search(r5));
// console.log(str.replace(r2, "THE Coder"));
// console.log(r2.exec(str));
// console.log(r2.test(str));


//NB: (?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+) test this


//  ########################################################################################

// pape@ndiaye.net or  pape.ndiaye@gmail.net and
// pape.ndiaye@nyu.com

