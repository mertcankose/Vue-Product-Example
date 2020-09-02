<template>
  <div v-if="shows.length>0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <div class="row product-container">
      <div v-for="show in shows" class="col-md-2 card">
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

<style>
</style>