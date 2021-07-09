 interface Ordenes {
    orden:    OrdenTrabajo;
    detalles: Detalle[];
}

 interface Detalle {
    idEstado?:    number;
    fecha?:       number;
    ubicacion?:      string;
    descripcion?: string;
    imagen?:      string;
    idOrdenTrabajo?: number;
    historialEstado?: HistorialEstado;
    idHistorialEstado?:number
}


 interface HistorialEstado {
    idHistorial: number;
    nombre:      string;
}

 interface OrdenTrabajo {
    idOrdenTrabajo?:number;
    numeroOrden?:         string;
    categoria?:           string;
    nombreEquipo?:        string;
    numeroSerie?:         string;
    marca?:               string;
    modelo?:              string;
    observacionesEquipo?: string;
    fecha?:               Date;
    aniosGarantia?:       number;
    estado?:              string,
    numeroFactura?:       string;
    fechaFactura?:        Date;
    montoFactura?:        number;
    usuario?:             Usuario;
    cliente?:             Cliente;
    proveedor?:           Proveedor;
}


 interface Cliente {
    idCliente?: number,
    cedula?:      string;
    nombres?:     string;
    apellidos?:   string;
    telefono?:    string;
    direccion?:   string;
    correo?:      string;
}

 interface Usuario {
    idUsuario:  number;
   
}


 interface Proveedor {
    id?: number,
    cedula?:      string;
    nombres?:     string;
    apellidos?:   string;
    telefono?:    string;
    direccion?:   string;
    correo?:      string;
}



 interface ProductoDanado {
    idOrdenTrabajo? :number,
    nombreEquipo?:        string;
    numeroSerie?:         string;
    marca?:               string;
    modelo?:              string;
}


 interface CambioProducto{
    descripcion?: string;
    ordenTrabajo?:OrdenTrabajo;
    producto?:Producto
}

// =================
 interface Productos {
    producto: Producto;
}


 interface Inventario {
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


 interface Producto {
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

 interface Categoria {
    idCategoria?: number;
    nombre: string;
}


