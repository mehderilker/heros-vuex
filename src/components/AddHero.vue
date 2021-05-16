<template>
  <div class="hero-form">
    <form @submit.prevent="submitHero" >
      <div class="image-add">
        <img width="100" height="100" :src="hero.previewImage" class="uploading-image" />
        <input required type="file" accept="image/jpeg" @change="uploadImage">
      </div>
      <input
      v-model="hero.title"
      placeholder="Hero's name..."
      required
      />
      <button type="submit" >Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hero:[]
    }
  },
  methods:{
    submitHero(){
        this.$store.commit('addHero',this.hero);
        this.hero = [];
    },
    uploadImage(e){
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
            this.hero.previewImage = e.target.result;
        };
    }
  }
}
</script>

<style scoped>
.hero-form{
 text-align: left;
}
.image-add{
  display: flex;
  align-items: center
;}
</style>
