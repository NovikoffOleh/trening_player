(() => {
    const refs = {
      bodyEl: document.querySelector('body'),
      openModalFooter: document.querySelector('[data-modal-footer-open]'),
      closeModalFooter: document.querySelector('[data-modal-footer-close]'),
      footerModal: document.querySelector('[data-modal-footer]'),
    };
  
    refs.openModalFooter.addEventListener('click', toggleModal);
    refs.closeModalFooter.addEventListener('click', toggleModal);
  
    function toggleModal(event) {
      event.preventDefault();
      refs.bodyEl.classList.toggle('hidden')
      refs.footerModal.classList.toggle('is-hidden');
      window.addEventListener('keydown', closeFooterModalEscape);
    }
  
    function closeFooterModalEscape(event) {
      if (event.code === 'Escape') {
        toggleModal(event);
        window.removeEventListener('keydown', closeFooterModalEscape);
      }
    }
  })();
  
  