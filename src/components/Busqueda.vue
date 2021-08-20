<template>
  <div class="container">
    <div class="my-5">
      <label for="buscarPorId">
        <b>Búsqueda de Juegos</b>
        <br />
        <input
          type="text"
          placeholder="0001,0002,0003,etc.."
          :value="$store.state.buscarPorId"
          @input="$store.commit('SET_BUSQUEDA', $event.target.value)"
        />
        <ul>
          <li
            v-for="game in $store.getters.gamesDisponiblesPorId"
            :key="game.codigo"
            :style="{ backgroundColor: game.color }"
          >
            {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} |
            {{ game.precio }}
          </li>
        </ul>
        <!--<input class="form-control" type="text" v-model="buscarPorId" placeholder="0001,0002,0003,etc"> -->
      </label>
    </div>
    <p>Número de juegos disponibles: {{ games.length }}</p>
    <p>Cantidad de juegos totales: {{ gamesTotal }}</p>

    <h3 class="mt-5">Listado de Juegos</h3>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
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

<style scoped></style>
