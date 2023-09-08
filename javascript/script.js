window.addEventListener('scroll', function() {
    var filas = document.querySelectorAll('.fila');
    filas.forEach(function(fila) {
      if (fila.getBoundingClientRect().top < window.innerHeight) {
        fila.classList.remove('oculta');
      } else {
        fila.classList.add('oculta');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(function(header) {
      header.addEventListener('click', function() {
        var item = this.closest('.accordion-item');
        
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          var activeItem = document.querySelector('.accordion-item.active');
          if (activeItem) {
            activeItem.classList.remove('active');
          }
          
          item.classList.add('active');
        }
      });
    });
  });