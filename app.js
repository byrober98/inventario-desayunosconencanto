const STORAGE_KEY = 'catering_pro_realtime_db';
const canalRT = new BroadcastChannel('catering_live_sync_channel');

function obtenerInventario() {
    let data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        const inicial = [
            { id: 1, nombre: "Langostinos (kg)", categoria: "Congelados", estado: "OK", veces: 0 },
            { id: 2, nombre: "Croquetas Caseras", categoria: "Congelados", estado: "OK", veces: 0 },
            { id: 3, nombre: "Ternera Fresca (kg)", categoria: "Frescos", estado: "OK", veces: 0 },
            { id: 4, nombre: "Verdura Variada", categoria: "Frescos", estado: "OK", veces: 0 },
            { id: 5, nombre: "Arroz Redondo (kg)", categoria: "Secos", estado: "OK", veces: 0 },
            { id: 6, nombre: "Aceite de Oliva (L)", categoria: "Secos", estado: "OK", veces: 0 },
            { id: 7, nombre: "Cajas de Cartón", categoria: "Menaje", estado: "OK", veces: 0 }
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inicial));
        return inicial;
    }
    return JSON.parse(data);
}

function guardarInventario(db, mensajeNotif = null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    canalRT.postMessage({ tipo: 'actualizar', mensaje: mensajeNotif });
}

function mostrarToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toast-msg').innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}
