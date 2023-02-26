<template>
  <div>
    <Main />
  </div>
</template>

<script>
import "@/assets/styles/reset.css";
import "@/assets/styles/global.css";

import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>