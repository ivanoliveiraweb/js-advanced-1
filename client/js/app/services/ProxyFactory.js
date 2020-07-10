class ProxyFactory {
    
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get: function(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._eFuncao(target[prop])) {
                    return function() {
                        console.log(`Interceptando ${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);

                        return retorno;
                    }                    
                }

                return Reflect.get(target, prop, receiver);
            },

            set: function(target, prop, value, receiver) {
                let retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) {
                    acao(target);    
                }
                return retorno;
            }
        });
    }

    static _eFuncao(prop) {
        return typeof(prop) == typeof(Function);
    }

}