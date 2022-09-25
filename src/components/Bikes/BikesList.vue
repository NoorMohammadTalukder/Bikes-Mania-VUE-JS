<template>
  <section class="container">
    <div class="row row-cols-1 row-cols-md-3 g-1 ">
      <bike-list-result class="col "
    
    v-for="result in results"
    :key="result.vin"
    :model="result.model"
    :url="result.url"
    :vin="result.vin"
    :price="result.price">
    
  </bike-list-result>
    </div>
    
    <!-- <div
      class="row row-cols-sm-2 row-cols-1 row-cols-md-3 g-3"
      v-for="result in results"
      :key="result.vin"
      :model="result.model"
      :url="result.rating"
      :vin="result.vin"
      :price="result.price"
    >
      <div class="col">
        <div class="card h-100 bg-white p-3 rounded-3">
          <div class="">
            <div class="bg-warning">
              <img
                src="{{'url'}}"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div><h4>Make (Model):{{model}}</h4></div>
              <div><h6>$Price: {{price}}</h6></div>
            </div>
            <p>Vin: {{vin}}</p>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-dark">Details</button>
          </div>
        </div>
      </div> -->

      <!-- <div class="col">
      <div class="card h-100 bg-white p-3 rounded-3">
        <div class="">
          <div class="bg-warning">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div><h4>Make (Model)</h4></div>
            <div><h6>$Price</h6></div>
          </div>
          <p>Vin</p>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-dark">Details</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 bg-white p-3 rounded-3">
        <div class="">
          <div class="bg-warning">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div><h4>Make (Model)</h4></div>
            <div><h6>$Price</h6></div>
          </div>
          <p>Vin</p>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-dark">Details</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 bg-white p-3 rounded-3">
        <div class="">
          <div class="bg-warning">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div><h4>Make (Model)</h4></div>
            <div><h6>$Price</h6></div>
          </div>
          <p>Vin</p>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-dark">Details</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 bg-white p-3 rounded-3">
        <div class="">
          <div class="bg-warning">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div><h4>Make (Model)</h4></div>
            <div><h6>$Price</h6></div>
          </div>
          <p>Vin</p>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-dark">Details</button>
        </div>
      </div>
    </div>
   </div> -->
  </section>
</template>

<script>
import BikeListResult from './BikeListResults.vue';

export default {
  components: {
  BikeListResult,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadBikes() {
      fetch(
        "https://vuedb-64594-default-rtdb.asia-southeast1.firebasedatabase.app/bikes.json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
            // console.log(res)
          }
        })
        .then((data) => {
          // this.isLoading = false;
          //console.log(data)
          const results = [];
          for (const id in data) {
            results.push({
              // id:id,
              // name:data[id].name,
             // rating: data[id].rating,
              url: data[id].url,
              model: data[id].model,
              vin: data[id].vin,
              price: data[id].price,
             
            });
          }
          this.results = results;
          console.log(this.results)
        })
        .catch((error) => {
          console.log(error);
          // alert(error)
          this.isLoading = false;
          this.error = error;
        });
    },
  },
  mounted() {
    this.loadBikes();
  },
};
</script>
