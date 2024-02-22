<template>


  <div class="container-fluid">
    <a class="navbar-brand" style="font-family: Livvic-Bold;" href="/"><h1>MIRTE</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/whois" class="nav-link">Who is Mirte?</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#/robots" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Robots
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="/robots?r=light" class="nav-link"><span class="mirte">MIRTE</span> Light</router-link>
            <router-link to="/robots?r=basic" class="nav-link"><span class="mirte">MIRTE</span> Basic</router-link>
            <router-link to="/robots?r=pioneer" class="nav-link"><span class="mirte">MIRTE</span> Pioneer</router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/configure" class="nav-link">Configure</router-link>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#/robots" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contribute
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
             <a class="nav-link" href="https://github.com/mirte-robot">Github</a>
          </ul>
        </li>

      </ul>
    </div>
  </div>



</template>

<script>
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped>
button {
  font-size: 24px;
  padding: 14px;
}
</style>
