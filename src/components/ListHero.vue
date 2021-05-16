<template>
  <div class="todo-list">
      <div class="todo-item" v-for="hero in heros" :key="hero.id">
          <img width="50" height="50" :src="hero.srcImage"/>
          <p>{{hero.title}}</p>
          <input
            type="checkBox"
            name="add"
            @change="updateHero(hero)"
            :checked="hero.completed"
          />
          <div class="font-icon" @click="deleteHero(hero)">
              <font-awesome-icon icon="times-circle" />
          </div>
      </div>
      <p>
          Selected Heroes: {{herosCount}}
      </p>
  </div>
</template>

<script>
export default {
    created(){
        this.getHeros
    },
    computed:{
        heros(){
            return this.$store.state.heroList;
        },
        herosCount(){
            return this.$store.getters.completeHerosLenght;
        }
    },
    methods:{
        updateHero(hero){
            this.$store.commit('updateHero',hero.id);
        },
        deleteHero(hero){
            this.$store.commit('deleteHero',hero.id);
        }
    }
}
</script>

<style>
.font-icon{
    color:red
}
.todo-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>