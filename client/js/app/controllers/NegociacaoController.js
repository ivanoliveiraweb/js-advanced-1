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
            ...this._inputData.value.split('-') // com o Spread operator isso gera um array
            .map((item, indice) => {
                if(indice == 1) { // 1 é a posição do array criado pelo split
                    return item - 1;
                }
                return item;
            })
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let diaMesAno = negociacao.data.getDate() + '/' + (negociacao.data.getMonth() + 1) + '/' + negociacao.data.getFullYear();

        document.querySelector('.form').reset();

        this._inputData.focus();

        console.log(diaMesAno);
    }
}