let hideText_btn = document.getElementById('hideText_btn');
let hideText_btn2 = document.getElementById('hideText_btn2');
let hideText = document.getElementById('hideText');
let hiderText = document.getElementById('hiderText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
  
    // Obtener el ancho de la ventana del navegador
    let windowWidth = window.innerWidth;
  
    if (hideText.classList.contains('show') && windowWidth < 480) {
      hiderText.style.display = 'block';
      hideText_btn.innerHTML = 'Leer menos';
    } else {
      hiderText.style.display = 'none';
      hideText_btn.innerHTML = 'Leer más';
    }
  }