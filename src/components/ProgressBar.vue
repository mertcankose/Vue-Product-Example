<template>
  <div class="progress">
    <div
      class="progress-bar bg-info"
      role="progressbar"
      :style="progressBar"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >{{currentItem}}/10</div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      currentItem: 0,
      progress: 0,
    };
  },
  computed: {
    progressBar() {
      return {
        width: this.progress + "%",
      };
    },
  },
  created() {
    eventBus.$on("activatedProgressBar", (value) => {
      this.progress = value * 10;
      this.currentItem = value;
    });
  },
};
</script>

<style>
</style>