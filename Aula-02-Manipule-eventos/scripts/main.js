$(document).ready(function () {

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').on('click', function() {
        $('form').slideUp()
    })
})