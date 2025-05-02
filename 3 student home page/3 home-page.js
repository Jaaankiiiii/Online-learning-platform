'use strict'
// const userName=document.querySelector('.value').textContent
// console.log(userName)
// document.querySelector('.submit').addEventListener('click',function(){
//     let userName=document.querySelector('.value').value
//     console.log(userName)
//     document.querySelector('.user').textContent=userName;
//     modal.classList.add('.hidden');
// })
const btnsCloseModal=document.querySelector('.close-modal')
const modal=document.querySelector('.modal')
const submit=document.querySelector('.submit')
let userName=document.querySelector('.value').value
const overlay=document.querySelector('.overlay')

const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')

    console.log('hidden')
}

//cross hidden
btnsCloseModal.addEventListener('click',closeModal);

//overlay hidden
overlay.addEventListener('click',closeModal);

//submit hidden
submit.addEventListener('click',function(){
    let userName=document.querySelector('.value').value
    console.log(userName)
    document.querySelector('.user').textContent=userName
    console.log(userName)
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
})
//escape key
document.addEventListener('keydown',function(e){
    console.log(e.key)
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})

