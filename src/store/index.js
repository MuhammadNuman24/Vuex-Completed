import Vue from 'vue'
import Vuex from 'vuex'
import {Users} from '../shared'

Vue.use(Vuex)
const  state={
  user:[]
};
const mutations={
  GetUser(state,a){
    state.user.push(a)
  }
};
const actions={
   async GetUserAct({commit},U){
     U=await Users.GetUser()
     console.log(U)
    commit("GetUser",U)
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // modules
})
