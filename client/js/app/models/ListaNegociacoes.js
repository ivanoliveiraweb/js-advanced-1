class ListaNegociacoes {
    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes); // blindando negociações para não ter acesso de forma externa
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
    }
}