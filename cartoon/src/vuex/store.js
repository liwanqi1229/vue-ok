import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    discoverList : [] //存放图片列表
}
const mutations = {//用于同步
    setDiscoverList(state, status){ //status用于改变state的值 
        state.discoverList = status 
    }
}
//相当于computed
const getters = {

}
const actions = {//用于异步操作: 在判断,请求后,执行mutations中的方法
    actionDiscoverList({commit}, status){ //参数{commit}: 是ES6中的函数参数解构赋值
        commit('setDiscoverList', status);
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});






