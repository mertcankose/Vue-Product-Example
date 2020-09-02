<template>
  <div class="col-md-5">
    <div class="col-md-11 card">
      <div class="card-body">
        <div class="form-group">
          <label>Ürün Adı</label>
          <input v-model="infos.name" type="text" class="form-control" placeholder="adını giriniz" />
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Ürün Adeti</label>
            <input
              v-model="infos.piece"
              type="text"
              class="form-control"
              placeholder="adetini giriniz"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Ürün Fiyatı</label>
            <input
              v-model="infos.price"
              type="text"
              class="form-control"
              placeholder="fiyatını giriniz"
            />
          </div>
        </div>
        <button @click="sendInfos" class="btn btn-outline-info btn-block">Ekle!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      infos: {
        photo: null,
        name: null,
        piece: null,
        price: null,
        totalPrice: null,
      },
    };
  },
  methods: {
    sendInfos() {
      this.infos.totalPrice = this.infos.piece * this.infos.price;
      eventBus.sendInfos(this.infos);
      this.infos = {
        photo: null,
        name: null,
        piece: null,
        price: null,
        totalPrice: null,
      };
      eventBus.deletePhoto();
      //eventBus.activatedProgressBar();
    },
  },
  created() {
    eventBus.$on("uploadedPhoto", (value) => {
      this.infos.photo = value;
    });
  },
};
</script>

<style>
</style>