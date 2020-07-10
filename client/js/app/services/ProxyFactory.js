class ProxyFactory {
    
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get: function(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._eFuncao(target[prop])) {
                    return function() {
                        console.log(`Interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }                    
                }

                return Reflect.get(target, prop, receiver);
            },

            set: function(target, prop, value, receiver) {
                if (props.includes(prop)) {
                    target[prop] = value;
                    acao(target);
                }

                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _eFuncao(prop) {
        return typeof(prop) == typeof(Function);
    }

}