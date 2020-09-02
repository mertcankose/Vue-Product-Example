<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />
    <div class="row">
      <SelectPhoto></SelectPhoto>
      <ProductInputs></ProductInputs>
    </div>
    <br />
    <br />
    <ProgressBar></ProgressBar>
    <br />
    <br />
    <ShowProduct></ShowProduct>
  </div>
</template>

<script>
import SelectPhoto from "./components/SelectPhoto";
import ProductInputs from "./components/ProductInputs";
import ProgressBar from "./components/ProgressBar";
import ShowProduct from "./components/ShowProducts";

export default {
  data() {
    return {};
  },
  components: {
    SelectPhoto,
    ProductInputs,
    ProgressBar,
    ShowProduct,
  },
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>

