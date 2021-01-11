const formPopup = document.querySelector('.form-popup')
const close = document.querySelector(".closeform")

window.addEventListener("load", function(){
    // showPopup();
    setTimeout(function(){
        formPopup.classList.add("show")

    }, 5000)
});

// const showPopup = () =>{
//     const timeLimit = 5
//     let i = 0;
//     const timer = setInterval(function(){
//         i++
//         if(i === timeLimit){
//            clearInterval(timer)
//            formPopup.classList.add("show")
//         }
//         console.log(i)

//     }, 1000);
// }

close.addEventListener("click", function(){
    formPopup.classList.remove("show")
})