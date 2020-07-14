class NegociacaoService {
    obterNegociacoesDaSemana(cb) {
        let xhr = new XMLHttpRequest();

        // abre a conexão
        xhr.open('GET', 'negociacoes/semana');

        /**
         * Configurações
         * 
         * Estados da requisição:
         * 
         * 0: requisição ainda não iniciada
         * 1: conexão com o servidor estabelecida
         * 2: requisição recebida
         * 3: processando requisição
         * 4: requisição está concluída e a resposta está pronta
         */
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(
                        null, 
                        JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    );
                } else {
                    console.log(xhr.responseText);

                    cb('Não foi possível obter as negociações da semana', null);
                }
            }
        };

        // executa
        xhr.send();
    }

    obterNegociacoesDaSemanaAnterior(cb) {
        let xhr = new XMLHttpRequest();

        // abre a conexão
        xhr.open('GET', 'negociacoes/anterior');

        /**
         * Configurações
         * 
         * Estados da requisição:
         * 
         * 0: requisição ainda não iniciada
         * 1: conexão com o servidor estabelecida
         * 2: requisição recebida
         * 3: processando requisição
         * 4: requisição está concluída e a resposta está pronta
         */
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(
                        null, 
                        JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    );
                } else {
                    console.log(xhr.responseText);

                    cb('Não foi possível obter as negociações da semana', null);
                }
            }
        };

        // executa
        xhr.send();
    }

    obterNegociacoesDaSemanaRetrasada(cb) {
        let xhr = new XMLHttpRequest();

        // abre a conexão
        xhr.open('GET', 'negociacoes/retrasada');

        /**
         * Configurações
         * 
         * Estados da requisição:
         * 
         * 0: requisição ainda não iniciada
         * 1: conexão com o servidor estabelecida
         * 2: requisição recebida
         * 3: processando requisição
         * 4: requisição está concluída e a resposta está pronta
         */
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(
                        null, 
                        JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    );
                } else {
                    console.log(xhr.responseText);

                    cb('Não foi possível obter as negociações da semana', null);
                }
            }
        };

        // executa
        xhr.send();
    }
}