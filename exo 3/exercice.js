let text = document.getElementsByClassName("name-tag");
console.log(text);

for ( i = 0; i < text.length; i++) {
    let doc = document.createElement("p");
    doc.innerHTML = "HELLO WORLD!";
    text[i].prepend(doc)
}









