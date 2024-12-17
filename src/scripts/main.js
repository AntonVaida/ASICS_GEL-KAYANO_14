'use strict';
const trigger = document.querySelector('#trigger_photo_preview');
const modal = document.getElementById('modal_photo_preview');
const closeBtn = document.getElementById('close_button_photo_preview');

const sizeGuideModal = document.getElementById('modal_size_guide');
const triggerOpenSizeGuideModal = document.querySelector("#trigger_open_size_guide");
const closeBtnSizeGuide = document.getElementById("close_button_size_guide");

trigger?.addEventListener('click', () => {
 modal?.style && (modal.style.display = 'block');
 document.body.classList.add('modal-open');
});

closeBtn?.addEventListener('click', () => {
   modal?.style && (modal.style.display = 'none');
   document.body.classList.remove('modal-open');
});

triggerOpenSizeGuideModal?.addEventListener('click', () => {
 sizeGuideModal?.style && (sizeGuideModal.style.display = 'flex');
 document.body.classList.add('modal-open');
});

closeBtnSizeGuide?.addEventListener('click', () => {
   sizeGuideModal?.style && (sizeGuideModal.style.display = 'none');
   document.body.classList.remove('modal-open');
});

sizeGuideModal?.addEventListener('click', (e) => {
  if (e.target === sizeGuideModal) {
    sizeGuideModal.style.display = 'none';
  }
});
