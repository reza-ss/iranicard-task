<template>
    <div class="wrapper">
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="#">welcome {{email}}</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
           <b-button class="logout" v-on:click="logout" variant="outline-warning">{{isLoading ? ""  : "logout"}}
               <b-spinner v-if="isLoading" label="Spinning"></b-spinner>
           </b-button>
      </b-navbar-nav>
  </b-navbar>
  <div class="content">
    <Nuxt />
  </div>
</div>
</template>
<script>
export default {
data(){
return {
    email:this.$store.state.userEmail,
    isLoading:false
}
},
methods:{
   async logout(){
    this.isLoading = true;
    try {
      await this.$store.dispatch("logout");
      this.$router.replace("/login");
    } catch (error) {
        alert(error);
        this.isLoading = false;
    }
    }
}
}
</script>
<style>
.logout{
    width: 100px;
    text-align: center;
}
</style>
<style scoped>
.wrapper{
  display: flex;
  flex-flow: column wrap;
}
.content{
  flex: 1;
}
</style>