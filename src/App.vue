<template>
  <div id="app">
    <!-- <img class="logo" alt="Vue logo" src="./assets/logo.png" /> -->
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav md-auto">
            <li>
              <router-link class="nav-link p-3" to="/">Inicio</router-link>
            </li>
            <li>
              <router-link class="nav-link p-3" to="/busqueda"
                >Búsquedas</router-link
              >
            </li>
            <li>
              <router-link class="nav-link p-3" to="/ventas"
                >Ventas</router-link
              >
            </li>
            <li>
              <router-link class="nav-link p-3" to="/total">Total</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
       <!-- <router-view></router-view> -->
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
  name: "App",
  components: {},
  data(){
    return {
      buscarPorId:''
    }
  },
  computed: {
    
    },
    ...mapGetters([
      "games",
      "cantidadStock"
    ]),
    gamesDisponiblesPorId(){
      return this.$store.getters.gamesDisponiblesPorId(this.buscarPorId)
    },
    ...mapState({
      destacado: (state) => {
        return state.destacado ? 'Destacado' : 'Disponible';
      },
    }),

}
</script>

<style scoped>
.logo{
  width: 20%;
  margin-bottom: 20px;
  margin-top: 10px;
}
.title{
  text-align: center;
}
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
