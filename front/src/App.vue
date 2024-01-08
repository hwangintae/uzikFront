<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const isHome = () => {
  let route = useRoute()
  let path = route.path

  if (path === "/") return false
  else return true
}
</script>

<template>
  <RouterView />
  <div class="fixed-bottom">
    <nav v-if="isHome()" class="nav nav-pills nav-fill">
      <RouterLink class="nav-link active" to="/">홈</RouterLink>
      <RouterLink class="nav-link" to="/menu">메뉴</RouterLink>
      <RouterLink class="nav-link" to="/order">주문내역</RouterLink>
      <RouterLink class="nav-link" to="/pay">결제</RouterLink>
      <RouterLink class="nav-link" to="/more">더보기</RouterLink>
    </nav>
  </div>
  <p>{{ $route.path }}</p>

  
</template>

<style></style>
