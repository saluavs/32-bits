import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      title: '32bits',
      subtitle: 'Juegos de PC y consolas',
      buscarPorId: '',
      destacado: false,
      totalVentas: 0,
      games: [
        {codigo: '0001', nombre: 'Sekiro', stock: 100, precio: 30000, color: 'red', destacado: true},
        {codigo: '0002', nombre: 'Fifa 21', stock: 100, precio: 25000, color: 'blue', destacado: false},
        {codigo: '0003', nombre: 'Gears of War 4', stock: 100, precio: 15000, color: 'green', destacado: true},
        {codigo: '0004', nombre: 'Mario Tennis Aces', stock: 100, precio: 35000, color: 'yellow', destacado: false},
        {codigo: '0005', nombre: 'Bloodborne', stock: 100, precio: 10000, color: 'blue', destacado: false},
        {codigo: '0006', nombre: 'Forza Horizon 4', stock: 100, precio: 20000, color: 'red', destacado: true}
      ],
      
    },
    getters: {
      games(state){
        return state.games.filter(result =>{
          if (state.buscarPorId) {
            return result.codigo == state.buscarPorId
          }else {
            return result;
          }
        });
      }, 
      cantidadStock(state,getters){
        return getters.games.map(result => parseInt(result.stock))
      },
      // gamesDisponiblesPorId:(state, getters) => (id)=> {
      //   return getters.games.filter((numero)=>{
      //     return numero.codigo == id
      //   })
      // },
      gamesDisponiblesPorId(state) {
        return state.games.filter((game) =>
          game.codigo === state.buscarPorId
        )
      },
      //   return this.$store.getters.gamesDisponiblesPorId(this.buscarPorId)
      // },
      gamesTotal(state,getters){
        return getters.cantidadStock.reduce((acumulado,total)=>{
          return acumulado+total;
        });
      },
    },
  mutations: {
    SET_BUSQUEDA(state, value) {
      state.buscarPorId = value;
    },
  },
  actions: {},
});

export default store;
