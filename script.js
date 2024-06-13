// script.js

function mostrarMensaje(mensaje) {
    document.getElementById('modal-text').textContent = mensaje;
    document.getElementById('modal').style.display = 'flex';
}

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.querySelectorAll('.nav-box').forEach(box => {
    box.addEventListener('click', () => {
        document.getElementById('modal').style.display = 'flex';
    });
});
