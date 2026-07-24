document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.image-modal-close');

    document.querySelectorAll('.menu-clickable-image').forEach((img) => {
        img.addEventListener('click', () => {
            modalImage.src = img.getAttribute('data-image');
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
