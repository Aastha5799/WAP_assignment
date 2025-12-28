import { add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv } from './calculator.js'

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operator = document.getElementById('symbol')

const btnAdd = document.getElementById('btn_add')
const btnSub = document.getElementById('btn_sub')
const btnMul = document.getElementById('btn_mul')
const btnDiv = document.getElementById('btn_div')
const btnRes = document.getElementById('btn_res')
const display_res = document.getElementById('result')


btnAdd.addEventListener('click', function () {
    operator.value = '+'
})

btnSub.addEventListener('click', function () {
    operator.value = '-'
})
btnMul.addEventListener('click', function () {
    operator.value = '*'
})
btnDiv.addEventListener('click', function () {
    operator.value = '/'
})

btnRes.addEventListener('click', function(){
    let x = parseInt(num1.value) //converted to Integer, because by default stored as string
    let y = parseInt(num2.value) 

    if(!x && x!==0)
    {
        alert("Plz enter num1")
        return
    }
    if(!y && y!==0) //if(!y) won't work alone because if user enters 0 which is a valid number,
    {               // is also read as empty,
        alert("Plz enter num2")
        return
    }
    if(!operator.value)
    {
        alert("Please select operation")
        return
    }

    switch (operator.value) {
        case '+':
            display_res.value = funcAdd(x, y)
            break
        case '-':
            display_res.value = funcSub(x, y)
            break
        case '*':
            display_res.value = funcMul(x, y)
            break
        case '/':
            display_res.value = funcDiv(x, y)
            break
    }
})
