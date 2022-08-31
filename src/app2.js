import './app2.css'
import $ from 'jquery'

const $tabBar = $('.tabBar')
const $tabContent = $('.tabContent')

$tabBar.on('click','li',e =>{
    const $li = $(e.currentTarget)
    const index = $li.index()
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})
$tabBar.children().eq(0).trigger('click')
