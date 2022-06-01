$.validator.setDefaults({
  submitHandler: function () {
    Swal.fire(
      '¡Datos correctos!',
      '¡Formulario enviado!',
      'success'
    )
  }
});

$(document).ready(function () {
  $("#primary-form").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 3
      },
      edad: {
        required: true,
        number: true,
      },
      email: {
        required: true,
        email: true
      },
      telefono: {
        required: true,
        number: true,
        maxlength: 9
      },
      direccion: {
        required: true
      },
      mensaje: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      nombre: {
        required: "Debe ingresar su nombre",
        minlength: "El nombre debe tener minimo 3 caracteres"
      },
      edad: {
        required: "Debe ingrese su edad",
        number: "Ingrese un número valido"
      },
      email: {
        required: "Direccion de correo es requerida",
        email: "Ingrese un correo valido, por ejemplo: ejemplo@gmail.com"
      },
      telefono: {
        required: "Numero telefonico es requerido",
        number: "Ingrese un número valido",
        maxlength: "El numero debe tener 9 digitos como maximo"
      },
      direccion: {
        required: "Debe ingresar su direccion"
      },
      mensaje: {
        required: "Debe ingresar un mensaje",
        minlength: "El mensaje debe tener minimo 5 caracteres"
      }
    }
  });
});