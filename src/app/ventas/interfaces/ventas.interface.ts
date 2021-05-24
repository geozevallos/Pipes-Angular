export enum Tipo {
    bicho, fantasma, volador, lucha, eléctrico, normal , hada
}

export interface Pokemon {
    nombre: string;
    evoluciona: boolean;
    tipo: Tipo;
}