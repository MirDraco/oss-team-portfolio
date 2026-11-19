const toggleButtons = document.querySelectorAll('.member-toggle');

toggleButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const detailId = button.getAttribute('aria-controls');
    const detail = document.getElementById(detailId);
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      detail.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '담당 작업 보기';
    } else {
      detail.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      button.textContent = '담당 작업 접기';
    }
  });
});
