export function abrirModal() {
    document.getElementById('contactoLink').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('contactoModal').style.display = 'flex';
        document.body.classList.add('no-scroll');
        setTimeout(() => document.getElementById('contactoModal').classList.add('mostrar'), 10);
    });
    document.getElementById('cerrarModal').addEventListener('click', cerrarModal);
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('contactoModal')) cerrarModal();
    });
    function cerrarModal() {
        document.getElementById('contactoModal').classList.remove('mostrar');
        setTimeout(() => {
            document.getElementById('contactoModal').style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 300);
    }
}