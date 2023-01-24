/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

*/
const p = document.querySelector("p");
const words = p.innerText.split(" ");

const newText = words.map((word) => {
  let lenght = word.length;
  
  if (lenght >= 8) {
    return `<span class='bg-yellow'>${word}</span>`;
  }
  return word;
});

p.innerHTML = newText.join(" ");
p.querySelectorAll(".bg-yellow").forEach((word) => {
  word.style.backgroundColor = "yellow";
});


/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const body = document.querySelector('body');
const a_element = document.createElement('a');

a_element.href = 'http://officeipsum.com/';
a_element.innerText = 'Text Generator';
body.insertBefore(a_element, p.nextSibling);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
const p_html = p.innerHTML;
const sentences = p_html.split(".");
const new_sentences = sentences.map((sentence) => {
  if (sentence !== "") {
    return `<p>${sentence}.</p>`;
  }
});

p.innerHTML = new_sentences.join(" ");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
pElements = document.querySelectorAll("p p");

for (let i = 0; i < pElements.length; i++) {
  let word = pElements[i].innerText;
  word.replace(",", ". ");
  word.replace(".", ", ");
  word.replace("!", "! ");
  word.replace("?", "? ");
  let wordLen = word.split(" ");
  let displayCount = document.createElement("h3");
  displayCount.innerText = `Count: ${wordLen.length}`;
  displayCount.classList.add('italic')
  pElements[i].prepend(displayCount);
}


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

pElements.forEach((p) => {
    p.innerHTML = p.innerHTML.replace("?", "🤔");
    p.innerHTML = p.innerHTML.replace("!", "😲");
});