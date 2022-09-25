<template>
    
        <div class="card h-100  bg-white p-3 rounded-3 ">
          <div class="">
           
            <div class="bg-warning">
              <img 
                v-bind:src="url"
                class="card-img-top  card-img"
                alt="..."
              />
            </div>
          </div>

          <div class="card-body">
            <div class="">
              <div><h4>Model:{{model}}</h4></div>
              <div><h4>$Price: {{price}}</h4></div>
            </div>
            <p>Vin: <b>{{vin}}</b></p>
          </div>
          <!-- <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-dark">Details</button>
          </div> -->
        </div>
     
</template>

<script>
    export default {
      props: ['model','url', 'vin','price'],
      
    //   computed: {
    //     ratingClass() {
    //       return 'highlight rating--' + this.rating;
    //     },
    //   },
    };
    </script>

    <style scoped>
    .card-img{
      height: 300px;
      
    }
    /* .card{
      width: 150px;
    } */
    </style>