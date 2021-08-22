import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: '32bits',
    subtitle: 'Juegos de PC y consolas',
    buscarPorId: '',
    // destacado: false,
    totalVentas: 0,
    carrito: [],
    games: [{
        codigo: '0001',
        nombre: 'Sekiro',
        stock: 100,
        precio: 30000,
        color: 'red',
        destacado: true
      },
      {
        codigo: '0002',
        nombre: 'Fifa 21',
        stock: 100,
        precio: 25000,
        color: 'blue',
        destacado: false
      },
      {
        codigo: '0003',
        nombre: 'Gears of War 4',
        stock: 100,
        precio: 15000,
        color: 'green',
        destacado: true
      },
      {
        codigo: '0004',
        nombre: 'Mario Tennis Aces',
        stock: 100,
        precio: 35000,
        color: 'yellow',
        destacado: false
      },
      {
        codigo: '0005',
        nombre: 'Bloodborne',
        stock: 100,
        precio: 10000,
        color: 'blue',
        destacado: false
      },
      {
        codigo: '0006',
        nombre: 'Forza Horizon 4',
        stock: 100,
        precio: 20000,
        color: 'red',
        destacado: true
      }
    ],

  },
  getters: {

    games(state) {
      return state.games.filter(result => {
        if (state.buscarPorId) {
          return result.codigo == state.buscarPorId
        } else {
          return result;
        }
      });
    },
    cantidadStock(state, getters) {
      return getters.games.map(result => parseInt(result.stock))
    },
    gamesConStock: (state) => {
      return state.games.filter((item) => item.stock > 0).length;
    },
    gamesDisponiblesPorId(state) {
      return state.games.filter((game) =>
        game.codigo === state.buscarPorId
      )
    },
    gamesPrice: (state) =>
      state.games.reduce((acumulador, item) => {
        acumulador += item.stock
        return acumulador
      }, 0)
  },
  mutations: {
    SET_BUSQUEDA(state, value) {
      state.buscarPorId = value;
    },
    SET_TOTAL(state, item) {
      state.totalVentas += item.precio;
    },
    SUBSTRACT_STOCK(state, juegoIndex) {
      state.games[juegoIndex].stock -= 1;
    },
    ADD_STOCK(state, juegoIndex) {
      state.carrito[juegoIndex].stock += 1;
    },
    ADD_VENTA(state, item) {
      state.carrito.push(item);
    }
  },
  actions: {
    agregarJuego({
      state,
      commit
    }, {
      item,
      index
    }) {
      const juegoCarrito = state.carrito.findIndex(
        (productoCarrito) => productoCarrito.codigo === item.codigo
      )
      setTimeout(() => {
        if (juegoCarrito !== -1) {
          commit("ADD_STOCK", juegoCarrito);
          commit("SUBSTRACT_STOCK", index);
        } else {
          commit("SUBSTRACT_STOCK", index);
        }
        setTimeout(() => {
          commit("ADD_VENTA", {
            ...item,
            stock: 1
          });
          commit("SET_TOTAL", item)
          alert(`Venta realizada con éxito ¡¡¡EL JUEGO ${ item.nombre } ES TUYO!!!`);
        })
      })
    }
  },
});

export default store;