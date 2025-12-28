import { add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv } from './calculator.js'

$(document).ready(function () {

    const $num1 = $('#num1')
    const $num2 = $('#num2')
    const $operator = $('#symbol')

    const $btnAdd = $('#btn_add')
    const $btnSub = $('#btn_sub')
    const $btnMul = $('#btn_mul')
    const $btnDiv = $('#btn_div')
    const $btnRes = $('#btn_res')
    const $displayRes = $('#result')

    $btnAdd.on('click', function () {
        $operator.val('+')
    })

    $btnSub.on('click', function () {
        $operator.val('-')
    })

    $btnMul.on('click', function () {
        $operator.val('*')
    })

    $btnDiv.on('click', function () {
        $operator.val('/')
    })

    $btnRes.on('click', function () {

        let x = parseInt($num1.val())
        let y = parseInt($num2.val())

        if (!x && x !== 0) {
            alert("Plz enter num1")
            return
        }

        if (!y && y !== 0) {
            alert("Plz enter num2")
            return
        }

        if (!$operator.val()) {
            alert("Please select operation")
            return
        }

        switch ($operator.val()) {
            case '+':
                $displayRes.val(funcAdd(x, y))
                break
            case '-':
                $displayRes.val(funcSub(x, y))
                break
            case '*':
                $displayRes.val(funcMul(x, y))
                break
            case '/':
                $displayRes.val(funcDiv(x, y))
                break
        }
    })
})