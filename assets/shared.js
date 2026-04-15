/* RSEA B2B Wireframes — Shared JS */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Annotation view toggle ---- */
  document.querySelectorAll('.wf-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.wf-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.classList.toggle('clean-view', btn.dataset.mode === 'clean');
    });
  });

  /* ---- Note tag popups ---- */
  document.querySelectorAll('.note').forEach(tag => {
    tag.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.note-popup.show').forEach(p => p.classList.remove('show'));
      const popup = tag.querySelector('.note-popup');
      if (popup) popup.classList.toggle('show');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.note-popup.show').forEach(p => p.classList.remove('show'));
  });

  /* ---- Tab switching ---- */
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    tabGroup.querySelectorAll('button').forEach(tab => {
      tab.addEventListener('click', () => {
        tabGroup.querySelectorAll('button').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        if (target) {
          const container = tabGroup.parentElement;
          container.querySelectorAll('.tab-panel').forEach(p => {
            p.classList.toggle('active', p.dataset.panel === target);
          });
        }
      });
    });
  });

});

/* ---- Navigation helper ---- */
function navigateTo(page) {
  window.location.href = page;
}
