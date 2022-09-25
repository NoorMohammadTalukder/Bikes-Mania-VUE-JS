<template>
  <section class="container">
    <form class=" d-flex justify-content-center "  @submit.prevent="adminLogin">
      <div class="">
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <p v-if="error" class="text-danger">*Wrong Email or Password</p>
     
      <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
    data(){
        return{
            email:null,
            password:null, 
            error:false,
        }
    },
    methods:{
        adminLogin(){
            if(this.email==="admin@gmail.com" && this.password==="123"){
                this.$router.push('admin-dash')
            }else{
                this.error=true;
            }
        }
    }
}
</script>
