class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static textoParaData(texto) {
        return new Date(
            ...texto
            .split('-') // com o Spread operator isso gera um array
            .map((item, indice) => {
                if(indice == 1) { // 1 é a posição do array criado pelo split
                    return item - 1;
                }
                return item;
            })
        );
    }

    static dataParaTexto(data) {
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }
}