export interface Productos {
    producto: Producto;
}
export interface Producto {
    idProducto?: number,
    nombre?:      string;
    numeroSerie?: string;
    marca?:       string;
    modelo?:      string;
    categoria?:   Categoria;
    proveedor?:   Proveedor;
}

export interface Categoria {
    nombre: string;
}

export interface Proveedor {
    id?: number,
    cedula?:      string;
    nombres?:     string;
    apellidos?:   string;
    telefono?:    string;
    direccion?:   string;
    correo?:      string;
}
