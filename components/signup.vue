<template>
<div class="wrapper">
 <form v-on:submit.prevent="submitForm"  >
    <b-form-group
      id="fieldset-1"
      label="Enter your email"
      label-for="input-1"
       :invalid-feedback="emailError"
      :state="false"
    >
      <b-form-input id="input-1" placeholder="example@gmail.com" v-model="$v.email.$model" ></b-form-input>
    </b-form-group>
        <b-form-group
      id="fieldset-2"
      label="Enter your password"
      label-for="input-2"
             :invalid-feedback="passwordError"
      :state="false"
    >
      <b-form-input type="password"  id="input-2" v-model="$v.password.$model"></b-form-input>
    </b-form-group>
            <b-form-group
      id="fieldset-3"
      label="Enter your password again"
      label-for="input-3"
      :invalid-feedback="repeatPasswordError"
      :state="false"
    >
      <b-form-input type="password"  id="input-3" v-model="$v.repeatPassword.$model"></b-form-input>
    </b-form-group>
    <b-button type="submit"  v-bind:disabled="loading" block variant="outline-primary">{{loading ? "Sending informations..." : "submit"}}</b-button>
  </form>
    <nuxt-link  to="/login">you already have an account?</nuxt-link>
  </div>
</template>
<script>
import { required, minLength,email,sameAs } from 'vuelidate/lib/validators'
export default {
    props:["submit","loading"],
  data() {
    return {
      email: '',
      password: '',
      repeatPassword:""
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
        required,
      minLength:minLength(8)
    },
        repeatPassword: {
        required,
        sameAs:sameAs("password")
    }
  },
  computed:{
    emailError(){
   const {email,required,$dirty} = this.$v.email;
   if(!required && $dirty){
       return "email is required"
   }
      if(!email){
       return "enter a valid email!!!"
   }
    },
        passwordError(){
   const {minLength,required,$dirty} = this.$v.password;
   if(!required && $dirty){
       return "password is required"
   }
      if(!minLength){
       return "your password length must contain at least 8 character!!!"
   }
    },
            repeatPasswordError(){
   const {sameAs,required,$dirty} = this.$v.repeatPassword;
   if(!required && $dirty){
       return "repeat password is required"
   }
      if(!sameAs && $dirty){
       return "repeat password does not equal to password!!"
   }
    }
      },
   methods:{
    submitForm(){
         this.$v.$touch()
      if (!this.$v.$invalid) {
          const {email,password} = this;
        this.submit({email,password});
      }
    }
   } 
}
</script>
<style scoped>
.wrapper{
    width: 500px;
    padding: 15px;
    margin: 100px auto;
    background: #eee;
    border: 1px solid #989898;
}
a{
    display: block;
    margin-top: 15px;
}
</style>