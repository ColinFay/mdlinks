// set confirmation
var con = false;
// Set title
var tit = undefined;
var loc = undefined;

// Start by suggesting to add selected test
var select = window.getSelection().toString();
if (select) {
    if (confirm("Wanna use '" + select + "' as a title ? ")) {
        tit = select;
    }
}

// If still no title, try h1
if (tit === undefined) {
    var titleq = document.querySelector("h1");
    if (titleq && confirm("Wanna use '" + titleq.innerText + "' as a title ? ")) {
        tit = titleq.innerText;
    }
}

// If still no title, try frist h2
if (tit === undefined) {
    var titleq = document.querySelector("h2");
    if (titleq && confirm("Wanna use '" + titleq.innerText + "' as a title ? ")) {
        tit = titleq.innerText;
    }
}

// If still no title, prompt
if (tit === undefined) {
    tit = prompt("Enter the title manually:");
}

// Suggest location with query params
var select = window.location.href.split('?')[0]
if (select) {
    if (confirm("Wanna use '" + select + "' as a url ? ")) {
        loc = select;
    }
}

// If not confirmed, try without split
var select = window.location.href
if (loc === undefined) {
    if (confirm("Wanna use '" + select + "' as a url ? ")) {
        loc = select;
    }
}

// If still no loc, prompt
if (loc === undefined) {
    loc = prompt("Enter the url manually:");
}

liste = "";

if (confirm("Create a list entry?")) {
    liste = "+ ";
}

var md = liste + "[" + tit + "](" + loc + ")";

alert(md);



