<template>
  <div class="container">
    <div class="my-5">
      <label for="buscarPorId">
        <b>Búsqueda de Juegos</b>
        <input
          type="text"
          placeholder="0001,0002,0003,etc.."
          :value="$store.state.buscarPorId"
          @input="$store.commit('SET_BUSQUEDA', $event.target.value)"
        />
        
        <!--<input class="form-control" type="text" v-model="buscarPorId" placeholder="0001,0002,0003,etc"> -->
      </label>
    </div>
    <div style="background-color: black; width:25%; opacity:0.8">
      <p><strong>Número de juegos disponibles: {{ games.length }}</strong></p>
      <p><strong>Cantidad de juegos totales: {{ $store.getters.gamesPrice }}</strong></p>
    </div>
    <h3 class="mt-5">Listado de Juegos</h3>
    <table class="table table-dark table-striped">
      <thead>
        <tr style="background: black">
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in games"
          :key="index"
          :style="{ backgroundColor: item.color }"
        >
          <td>{{ item.codigo }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Busqueda",
  data: function() {
    return {
      buscarPorId: "",
    };
  },
  computed: {
    ...mapGetters([
      "games",
      "cantidadStock",
      "gamesDisponiblesPorId",
      "gamesTotal",
    ]),
  },

  methods: {},
};
</script>

<style scoped>

.my-5, h3 {
color: white;
  background-color: black ;
  width:25%;
  opacity:0.8;
  padding-inline-start: 10px;
  padding: 10px;
}
p {
  color:white;
  padding-inline-start: 10px
}
</style>
