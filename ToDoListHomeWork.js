const table = document.querySelector('.list')
const btn = document.querySelector('.btn')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const td = document.querySelector('.list-group-item')

input1.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter'){
        ente()
    }
})
input2.addEventListener('keydown',(e)=>{
    if (e.key ===  'Enter'){
        ente()
    }
})
function ente() {
    if (input2.value === '' && input1.value === '' ){
        alert('404')
    }else {
        table.innerHTML += `<td class="list-group-item w-100 d-flex align-items-center justify-content-between">

<span>${input1.value}</span>
<span>${input2.value}</span>
<button class="del-btn btn btn btn-danger">delete</button>
</td>`
        input1.value = ''
        input2.value = ''
    }
    }

btn.addEventListener('click',(e)=>{
    ente()
})
table.addEventListener('click',(e)=>{
    if (e.target.classList.contains('del-btn')){
        e.target.closest('tr').remove()
    }
})



