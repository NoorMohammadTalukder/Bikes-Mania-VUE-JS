<template>
  <section  @click="fireNav"   v-on:onload="setSpinner">
    <nav-bar @click="fireNav" v-if="navStatus"></nav-bar>
    <!-- <div class="text-center" v-if="spinnerStatus===true">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div> -->
    <router-view></router-view>
  </section>
</template>

<script>

 


export default {
  
    
  data() {
    return {
      navStatus: false,
      spinnerStatus:true,
    };
  },
  watch:{
    spinnerStatus:function(){
      setTimeout(mm, 3000);
      function mm(){
        console.log(1);
        this.spinnerStatus=false;
        console.log(  this.spinnerStatus)
      }
    }
  },
  methods: {
    fireNav() {
      this.navStatus = true;
      this.spinnerStatus=false;
      
    },
    setSpinner(){
     
    }
    
    
  },
  beforeMount(){
   // this.Status()
 },
};
</script>

<style></style>

