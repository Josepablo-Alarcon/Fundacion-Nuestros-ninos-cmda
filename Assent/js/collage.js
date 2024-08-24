document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    const close = document.getElementsByClassName('close')[0];
    
    const collageItems = document.querySelectorAll('.collage-item img');

    collageItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'flex'; // Mostrar el modal
            modalImg.src = this.src; // Establecer la imagen en el modal
        });
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none'; // Ocultar el modal
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Ocultar el modal si se hace clic fuera de él
        }
    });
});
