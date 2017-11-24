import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import vuex from 'vuex'

const http =  axios.create({
  baseURL: 'http://35.194.237.123'
})

Vue.use(Vuex)

const state = {
  detail: []
}

const mutations={
  resultDetail(state,payload){
    console.log('inipayload resultDetail',payload);
    state.detail = payload
  },
  postDataMusic(state,payload){
    console.log('inipayload dari  post data Music',payload)
    state.detail.push(payload)
  }
}
const actions={
  getDetail({commit}, dataDetail){
    http.get('/',dataDetail)
    .then(({data})=>{
      // console.log('ini data getDetail',data);
      commit('resultDetail',data)
      // console.log('kiw')
      console.log(data)
    })
    .catch(err=>{
      res.send(err)
    })
  // console.log('kiw')
  },
  postMusic({commit},dataMusic){
    // var formData = new FormData()
    // formData.append('foo','bar')
    // http.post('/', dataMusic)
    
    // .then(data=>{
    //   commit('postDataMusic',dataMusic)
    //   console.log('ini data music dari data post Music',dataMusic);
    // })
    // .catch(err=>{
    //   console.error(err)
    // })
    // console.log(dataMusic)
    http.post('/', {
      title: dataMusic.title,
      image: dataMusic.image,
      tags: dataMusic.tags,
      desc: dataMusic.desc
    })
    .then(result => {
      console.log(result)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store 