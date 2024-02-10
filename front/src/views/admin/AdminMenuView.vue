<script setup lang="ts">

import { ref } from 'vue';

const menus = ref([
    {id: 1, name: "황인태카페", prize: 100_000},
    {id: 2, name: "", prize: 20_000},
    {id: 3, name: "", prize: 30_000},
    {id: 4, name: "", prize: 40_000},
])

const addMenu = () => {
  menus.value.push({id: 5, name: "test", prize: 100_000})
}

</script>

<template>
  <header>
    <p>메뉴 관리</p>
  </header>
  <body>
    <form @submit.prevent="addMenu">
      <button>추가</button>
    </form>
    <div class="list-group" v-for="menu in menus" :key="menu.id">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ menu.name }}</h5>
        <small>{{ menu.id }}</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small>{{ menu.prize }}</small>
    </div>
  </body>

  
    
</template>