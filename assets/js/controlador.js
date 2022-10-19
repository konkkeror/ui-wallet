console.log('Informacion', tarjetas);

let tarjetaSeleccionada;

function renderizarTarjetas() {
  tarjetas.forEach(t => {
    document.getElementById('lista-tarjetas').innerHTML += `<option value="${t.numero}">${t.numero}/${t.marca}</option>` ;
  });

  document.getElementById('lista-tarjetas').value = null;
}

renderizarTarjetas();


function seleccionarTarjeta() {
  tarjetaSeleccionada = tarjetas.filter(item => item.numero === document.getElementById('lista-tarjetas').value)[0];

  document.getElementById('nombre-marca').innerHTML = `<i class="fa-brands ${tarjetaSeleccionada.icono} fa-2xl"></i> ${tarjetaSeleccionada.marca}`;
  document.querySelector('#saldo .valor').innerHTML = tarjetaSeleccionada.activos;
  document.getElementById('asset-wallet').innerHTML = tarjetaSeleccionada.saldo;
  document.getElementById('consumption').innerHTML = tarjetaSeleccionada.consumo;

  if (tarjetaSeleccionada) {
    document.getElementById('tarjeta').style.display = 'block';
  }

  renderizarCategorias();
  console.log('Se selecciono una tarjeta', tarjetaSeleccionada);
}


function renderizarCategorias() {
  if (tarjetaSeleccionada.categoriaTransacciones) {
    tarjetaSeleccionada.categoriaTransacciones.forEach(categoria => {
      document.getElementById('transacciones').innerHTML += 
          `<div class="transaccion">
            <div class="icono">
              <span>
                <i class="${categoria.icono}"></i>
              </span>
            </div>
            <div class="texto">
              <div class="titulo">${categoria.titulo}</div>
              <div class="descripcion">${categoria.fechaUltimaTransaccion}</div>
            </div>
            <div class="monto">
              $${categoria.total}
            </div>
          </div>`;
    });
  }
}

