/* eslint-disable*/
const name = "wen"
const middle = "Ann";
const last = `newman`;
//double quote can be used if you want to avoid escaping a single quote in a string
console.log("it's fucked");
// see - no escaping necesark
console.log('it works');

/*back ticks are literal - all of the spacing will be maintained without the need for manually line breaking/escaping ie song 2 using dougble quotes*/
const song = `ohh

franky 

sinatra
yeet no lines without some stuff and junk.... 

makes no sense at all`;

const song2 = "ohh\n franky \n sinatra \nyeet no lines without some stuff and junk.... \nmakes no sense at all";

//INTERPOLATION is when you have a variable inside your string; build a string literal (template literal/template string) `junk ${variable} more junk`

const hello = `hello my name is ${name}; nice to meet you. I am ${1 + 100} years old`;

const html = `
<div>
    <h2>${name}</h2>
    <p>${hello}</p>
</div>
`;
//bad practise - for example purposes only.
document.body.innerHTML = html;