export interface RespuestaApi{
Personajes: Personajes[];
Controles: Controles[];
Items: Items[];
}

export interface Personajes{
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    ataque: string;
    vida: string;
 }

export interface Controles{
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
 }

export interface Items{
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
 }
export interface RespuestaDetalle {
    Personajes: Detalle;
}

export interface Detalle{
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    ataque: string;
    vida: string;
}