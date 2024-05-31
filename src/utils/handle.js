export const typesPokemons = (type) => {
    if (type[1]) {
        return type[0].type.name + " | " + type[1].type.name
    }
    return type[0].type.name
}
