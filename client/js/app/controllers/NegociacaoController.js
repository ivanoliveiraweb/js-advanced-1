class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        let data = new Date(
            ...this._inputData.value.split('-')
            .map(function(item, indice) {
                if(indice == 1) { // 1 é a posição do array criado pelo split
                    return item -1;
                }
                return item;
            })
        );

        console.log(data);
    }
}