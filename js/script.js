// Add custom JavaScript here

function runTypingEffect() {
    const text = "I am Brad Traversy."
    const typingElement = document.getElementById("typing-text")
    const typingDelay = 100;

    typeText(text, typingElement , typingDelay);
}

function typeText(text , typingElement , delay){
    for(let i = 0 ; i < text.length ; i++){
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        },delay * i)
    }
}

document.addEventListener("DOMContentLoaded" , runTypingEffect)


// own code
// window.addEventListener('DOMContentLoaded' , function(){
//     let effects = document.querySelector("#typewriter");
//     effects.innerHTML = "";
//     const text = "I am Brad Traversy."
//     let i = 0;
//     console.log(text.charAt(i))
//     setInterval(() => {
//         if(text.length > i) {
//             effects.innerHTML += text.charAt(i)
//             i++
//         }
     
//     } , 100)
// })
