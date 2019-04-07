export function formatarMoeda(valor, currency = undefined) {
    return currency
        ? valor !== undefined ? valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 0.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        : valor !== undefined ? valor.toLocaleString('pt-br', { minimumFractionDigits: 2 }) : 0.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export function removeArray(arr, value) {
    return arr.filter((obj) => {
        return obj !== value
    })
}

export function extractFromAddress(components, type, shortName = false) {
    for (var i = 0; i < components.length; i++) {
        for (var j = 0; j < components[i].types.length; j++) {
            if (components[i].types[j] === type) {
                return shortName ? components[i].short_name : components[i].long_name
            }
        }
    }
    return ''
}
