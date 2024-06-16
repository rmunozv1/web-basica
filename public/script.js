
document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    var data = {
        nombre: nombre,
        email: email
    };

      // Guardar una referencia a 'this' (el formulario)
      var form = this;

    fetch('/ruta-al-servidor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('nombreResultado').innerText = data.nombre;
        document.getElementById('emailResultado').innerText = data.email;
     
             // Usar la referencia guardada para llamar a reset()
             form.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    
});
