<template>
  <section class="d-flex justify-content-center">
    <form @submit.prevent="submitData" class="w-75">
      <h1 class="text-center">Admin Dash Board</h1>
      <h2 class="text-center text-success">Add Bike</h2>
      <div class="">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Image URL</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="url"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Model Number</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="model"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Vehicle Identification Number (Vin)</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="vin"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Price ($)</label
          >
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            v-model="price"
          />
        </div>
        <p v-if="error" class="text-danger">*Some input fill are missing</p>

        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      model: "",
      vin: "",
      price: "",
      error:false,
    };
  },
  methods: {
    submitData() {
      if (
        this.url !== "" &&
        this.model !== "" &&
        this.vin !== "" &&
        this.price !== ""
      ) {
            fetch(
            "https://vuedb-64594-default-rtdb.asia-southeast1.firebasedatabase.app/bikes.json",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                url: this.url,
                model: this.model,
                vin: this.vin,
                price: this.price,
                }),
            }
            )
            .then((response) => {
                if (!response.ok) {
                throw new Error("Could not save the data");
                }
            })
            .catch((error) => {
                this.error = error;
                console.log(error);
            });
            this.error=false;
            this.url = "" ;
            this.model = "" ;
            this.vin = "" ;
            this.price = "";
      }else{
          this.error=true;
      }
    },
  },
};
</script>
