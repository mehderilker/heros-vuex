import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        heroList: []
    },
    mutations:{
        addHero(state, hero){
            state.heroList = [
                ...state.heroList,{
                    id: Math.random(1),
                    title: hero.title,
                    srcImage: hero.previewImage,
                    completed: false,
                    deleted:false
                }
            ]
        },
        updateHero(state, heroId){
            state.heroList = state.heroList.map((item)=>{
                if(item.id === heroId){
                    item.completed = !item.completed;
                }
                return item;
            })
        },
        deleteHero(state, heroId){
            const index = state.heroList.findIndex((item) => item.id == heroId)
            state.heroList.splice(index,1);
        }
    },
    getters:{
        completeHerosLenght: (state) => {
            const completedheros = state.heroList.filter((filter)=> filter.completed);
            return completedheros.length;
        }
    }
})