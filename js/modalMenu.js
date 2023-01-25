(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modalMenu-open]"),
      closeModalBtn: document.querySelector("[data-modalMenu-close]"),
      modal: document.querySelector("[data-modalMenu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();