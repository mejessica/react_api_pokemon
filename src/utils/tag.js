export const tag = (id) => {
    let numero_formatado =  id.toString().padStart(4, '0');
    return numero_formatado
 }
