class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }
    
    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(negociacao => `

                    <tr>
                        <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>

                `).join('') /* junta tudo e vira uma grande string */ }
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${
                    // Utilizando IIFE (Immediately Invoked Function Expression):
                    // (function() {
                    //     let total = 0;
                    //     model.negociacoes.forEach(negociacao => total += negociacao.volume);
                    //     return total;
                    // })()
                    //
                    // Utilizando reduce():

                    model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)
                }</td>
            </tfoot>
        </table>   
        `;
    }
}

