
function aceiteC() {
  swal({
    title: "¿Esta seguro?",
    text: "Desea realizar la compra de aceite!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Compra Exitosa", {
        icon: "success",
      });
    } else {
      swal("Su compra a sido cancelada!");
    }
  });
}

function alerta2() {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}

