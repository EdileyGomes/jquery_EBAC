$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown()
    })

    $('#botao-cancelar').on('click', function () {
        $('form').slideUp()
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val()
        const novoItem = $('<li></li>')

        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                Ver Imagem em Tamanho Real
                </a>
            </div>
            `).appendTo(novoItem);
            $( novoItem ).appendTo('ul');
    })
})