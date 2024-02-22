<template>

<div class="d-flex flex-column h-100">

  <nav class="navbar navbar-expand-sm fixed-top">
    <Navbar/>
  </nav>

  <main style="flex: 1 0 auto;min-height: auto; padding-top: 56px; margin-top: 25px;">
    <router-view />
  </main>

  <footer style="padding: 10px; text-align: center; background-color: white;">
     <span class="mirte">MIRTE</span> {{ $t("footer") }} <a href="https://tudelftroboticsinstitute.nl/">TU Delft Robotics Institute</a>.
     <div class="position-fixed bottom-0 end-0 mb-2 me-2">
        <LocaleChanger/>
     </div>
  </footer>



</div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import LocaleChanger from "@/components/LocaleChanger.vue";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

export default {
  components: {
    Navbar,
    LocaleChanger
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
</style>

