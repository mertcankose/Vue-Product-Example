import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    sendInfos(value) {
      this.$emit("enteredInfos", value);
    },
    sendPhoto(value) {
      this.$emit("uploadedPhoto", value);
    },
    deletePhoto() {
      this.$emit("deletePhoto");
    },
    activatedProgressBar(value) {
      this.$emit("activatedProgressBar", value);
    },
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
