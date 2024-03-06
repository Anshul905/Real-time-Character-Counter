const textareaEle = document.querySelector("#textarea");
const totalCounterEle = document.querySelector("#total-counter");
const remainingCounterEle = document.querySelector("#remaining-counter");


textareaEle.addEventListener( "keyup" , function () {
    updateCounter();
} );

updateCounter();

function updateCounter() {
    var characterInTextarea = textareaEle.value.length ;
    totalCounterEle.innerHTML = characterInTextarea ;
    remainingCounterEle.innerHTML = textareaEle.getAttribute("maxLength")-characterInTextarea ;
}

