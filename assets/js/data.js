/*
Clases: es un tipo de dato!!!!!


Tarjeta
  numero
  nombre
  ...
  activos
  saldo
  consumo
  ...
  ...

Transaccion
  #transaccion
  descripcion
  valor
  descuento
  articulo
  ...

Categorias Transacciones
  titulo
  descripcion
  total
  icono
  transacciones[]
*/

var tarjetas = [
  {
    numero: '123456',
    icono: 'fa-cc-mastercard',
    marca: 'Mastercard',
    nombre: 'Juan',
    activos: 29768.00,
    saldo: 27329,
    consumo: 2323,
    categoriaTransacciones: [
      { 
        titulo: 'Food',
        fechaUltimaTransaccion: '12/12/2022',
        total: '26',
        icono: 'fa-solid fa-burger',
        // transacciones: [],
      },
      {
        titulo: 'Transporte',
        fechaUltimaTransaccion: '12/12/2022',
        total: '30',
        icono: 'fa-solid fa-bus',
        // transacciones: [],
      },
      {
        titulo: 'Home',
        fechaUltimaTransaccion: '12/12/2022',
        total: '100',
        icono: 'fa-solid fa-house',
        // transacciones: [],
      }
    ]
  },
  {
    numero: '67887',
    marca: 'Visa',
    icono:'fa-cc-visa', 
    nombre: 'Maria',
    activos: 66789.00,
    saldo: 989,
    consumo: 0998,
  },
  {
    numero: '0909088',
    marca: 'Amex',
    icono:'fa-cc-amex', 
    nombre: 'Pedro',
    activos: 234234.00,
    saldo: 34,
    consumo: 77,
  }
];

