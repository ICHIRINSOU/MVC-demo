import './app1.css'
import $ from 'jquery'

const $add1 = $('#add1')
const $minus1 = $('#minus1')
const $mul2 = $('#mul2')
const $divide2 = $('#divide2')
const $numbers = $('#numbers')
const n = localStorage.getItem('n')
$numbers.text( n || 0)

$add1.on('click',()=>{
    let n = parseInt($numbers.text())
    n += 1
    localStorage.setItem('n', n )
    $numbers.text(n)
})

$minus1.on('click',()=>{
    let n = parseInt($numbers.text())
    n -= 1
    localStorage.setItem('n',n)
    $numbers.text(n)
})

$mul2.on('click',()=>{
    let n = parseInt($numbers.text())
    n *= 2
    localStorage.setItem('n',n)
    $numbers.text(n)
})

$divide2.on('click',()=>{
    let n = parseInt($numbers.text())
    n /= 2
    localStorage.setItem('n',n)
    $numbers.text(n)
})