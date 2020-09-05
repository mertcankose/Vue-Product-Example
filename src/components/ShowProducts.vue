<template>
  <div v-if="shows.length>0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <div class="row product-container">
      <div v-for="(show,index) in shows" :key="index" class="card">
        <img
          class="card-img-top"
          :src="show.photo == null ? '/src/assets/default.png' : show.photo"
          :alt="show.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{show.name}}</h5>
          <small>
            <strong>Adet :</strong>
            {{show.piece}}
          </small>
          <br />
          <small>
            <strong>Fiyat :</strong>
            {{show.price}}
          </small>
          <br />
          <small>
            <strong>Total :</strong>
            {{show.totalPrice}}
          </small>
          <br />
        </div>
        <button class="deleteButton" @click="deleteProduct(index)">Delete Product</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      shows: [],
    };
  },
  methods: {
    deleteProduct(value) {
      this.shows.splice(value, 1);
      eventBus.activatedProgressBar(this.shows.length); //again control array and update progress bar
    },
  },
  created() {
    eventBus.$on("enteredInfos", (value) => {
      if (this.shows.length < 10) {
        this.shows.push(value);
        eventBus.activatedProgressBar(this.shows.length);
      } else {
        return alert("10 dan fazla ürün ekleyemezsin!");
      }
    });
  },
};
</script>

<style scoped>
.product-container div {
  margin-right: 10px;
}
.deleteButton {
  border: none;
  background-color: aquamarine;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #4a4646;
}
</style>