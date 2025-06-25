$(document).ready(function() {
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))


    document.querySelector('header button').addEventListener('click', function() {

    })

    $('header button').click(function() {
        alert('Expandir Fomulário')
    })

    $('form').on('submit', function(e) {
        console.log('submit')
        e.preventDefault()
    })
})