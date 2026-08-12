// Configuración de Credenciales y Base de Datos Local
const OBRADOR_CONFIG = {
    PASS_GERENTE: 'Orten292',
    PASS_JEFE: 'Silvia192'
};

// Base de datos inicial por defecto si está vacía
const defaultDB = {
    inventario: [
        { id: 1, categoria: 'PACKAGING', nombre: 'Cajas de cartón grandes', stock: 45, unidad: 'unidades' },
        { id: 2, categoria: 'INGREDIENTES', nombre: 'Harina de fuerza', stock: 4, unidad: 'kg' }
    ],
    faltas: [],
    historial: []
};

// Funciones de gestión de datos locales y sincronización por archivo
function obtenerBD() {
    const datos = localStorage.getItem('obrador_db_local');
    return datos ? JSON.parse(datos) : defaultDB;
}

function guardarBD(db) {
    localStorage.setItem('obrador_db_local', JSON.stringify(db));
}
