const ul = document.querySelector('.list')
const btn = document.querySelector('.add')
const input = document.querySelector('.input')
const err = document.querySelector('.err')

btn.addEventListener('click',(e)=>{
    task()
})
input.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter'){
        task()
    }
})
function task(){
    if (input.value.trim() === ''){
        input.style.border = '2px solid red'
        input.style.boxShadow = '0 0 2px red '
        btn.addEventListener('mouseout',()=>{
            input.style.border = 'none'
        })
    }    else{
        ul.innerHTML += `<li class="list-group-item  w-50 d-flex align-items-center justify-content-between">
   <span>
   <input type="checkbox" class="check">
   ${input.value}
   </span>
   <button class="del-btn btn btn-danger">delete</button>
    </li>`
        input.value = ''
    }
}
ul.addEventListener('click',(e)=>{
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains('check')){
       if (e.target.parentNode.classList.contains('line')){
           e.target.parentNode.classList.remove('line')
       }
       else{
           e.target.parentNode.classList.add('line')
       }
    }
})

// if(e.target.classList.contains('check')){
//     if(e.target.parentNode.classList.contains('cgek')){
//         e.target.parentNode.classLIst.remove('line')
//     }
//     else{
//         e.target.parentNode.classList.add('line')
//     }
// }