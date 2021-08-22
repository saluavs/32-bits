<template>
  <div>
    <div class="container mx-7">
      <h4>Juegos Disponibles: {{ $store.getters.gamesPrice }}</h4>

      <br />
    </div>
    <table class="table table-dark table-striped">
      <thead>
        <tr style="background: black; ">
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Venta</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in $store.state.games"
          :key="index"
          :style="{ backgroundColor: item.color }"
        >
          <td>{{ item.codigo }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
          <td>
            <button
              type="button"
              @click="ventaJuego(item, index)"
              class="btn btn-success"
            >
              Vender
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Venta",
  components: {},

  methods: {
    ventaJuego(item, index) {
      this.$store.dispatch("agregarJuego", { item, index });
    },
  },
};
</script>

<style scoped>
.container {
  color: white;
  background-color: black;
  opacity: 0.8;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-top: 15px;
  height: 60px;
  text-align: left;
  width: 80%;

}
.table {
  text-align: center;
  width: 80%;
  margin: auto;
}
.btn {
  height: 35px;
}
</style>
