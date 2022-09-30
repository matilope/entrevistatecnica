export class DireccionesNormalizadas {
    constructor(public altura: null,
        public cod_calle: number,
        public cod_calle_cruce: number,
        public cod_partido: string,
        public coordenadas: Cordenadas,
        public direccion: string,
        public nombre_calle: string,
        public nombre_calle_cruce: string,
        public nombre_localidad: string,
        public nombre_partido: string,
        public tipo: string) {

    }
}

export class Cordenadas {
    constructor(public srid: number,
        public x: number,
        public y: number) {

    }
}
