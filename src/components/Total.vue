<template>
  <div class=" container my-5">
    <h3>Listado de ventas</h3>
    <ul v-if="carrito.length > 0">
      <li v-for="item in $store.state.carrito" :key="item.codigo" :style="{ background: item.color}" >Código: {{item.codigo}}  |  Nombre: {{item.nombre}}  |  Stock: {{item.stock}}  |  Precio: ${{item.precio}}
      </li>
    </ul>
    <ul v-else>
      <li style="list-style:none">
        No hay ventas registradas
      </li>
    </ul>

    <h5 class="mt-5">Monto total $ {{ $store.state.totalVentas }}</h5>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Total',
  computed: {
    ...mapState(['carrito', 'totalVentas']),
    totalVentas() {
      const reducer = (accumulator, currentVentas) => accumulator + currentVentas.precio
      return this.carrito.reduce(reducer, 0)
    }
  },
  methods: {
  }
}
</script>

<style scoped>
ul,li{
  list-style:none;
}
.my-5{
  color: white;
  background-color: black ;
  width:40%;
  opacity:0.8;
  padding-inline-start: 10px
}
</style>