<template>
<div class="content_wrapper">
<b-button  v-on:click="goToVip" variant="outline-primary">go to vip page</b-button>
<b-button v-on:click="toggleVip" variant="outline-success">{{isVipActive ?  "Inactivate" :"Activate" }} vip</b-button>
</div>
</template>
<script>
export default {
  layout:"header",
  computed:{
    isVipActive(){
      return this.$store.state.vip;
    }
  },
  methods:{
    goToVip(){
      this.$router.push("/vip");
    },
    toggleVip(){
      this.$store.commit("TOGGLE_VIP");
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
<style scoped>
.content_wrapper{
  height: 300px;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
justify-content: center;
}
button{
  margin: 0 10px;
}
</style>