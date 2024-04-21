const textareaEl = document.querySelector(".textarea")
const totalCharaterEl = document.querySelector(".Total-Charater")
const remainingCharaterEl = document.querySelector(".Remaining-Charater")

textareaEl.addEventListener("keyup",function(){
    updateCounter()
})


function updateCounter(){
    totalCharaterEl.innerText = textareaEl.value.length;
    remainingCharaterEl.innerText = 450 - textareaEl.value.length;
} 


