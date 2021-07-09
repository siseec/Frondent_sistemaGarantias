export interface Productos {
    producto: Producto;
}


export interface Inventario {
    idInventario:       number;
    decripcionProducto: string;
    fecha:              number;
    movimiento:         string;
    existentes:         number;
    tipo:               string;
    cantidad:           number;
    stok:               number;
    producto:           Producto;
}


export interface Producto {
    idProducto?: number,
    nombre?:      string;
    numeroSerie?: string;
    marca?:       string;
    modelo?:      string;
    origen?:      string;
    estado?: number;    
    categoria?:   Categoria;
    proveedor?:   Proveedor;
}

export interface Categoria {
    idCategoria?: number;
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
