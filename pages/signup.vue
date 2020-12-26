<template>
    <Signup v-bind:loading="isLoading" v-bind:submit="submit"  />
</template>
<script>
export default {
data(){
    return {isLoading:false}
},
methods:{
    async submit(form){
    this.isLoading = true;
    try {
        await this.$store.dispatch("signup",form)
         this.$router.replace('/');   
    } catch (error) {
        this.isLoading = false
                  var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
    }
    }
}
}
</script>