<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const touch = () => {
  router.push({
    path: "/menu"
  })
}
</script>

<template>
  <div @click="touch()">
    <p>우직한 메뉴</p>
    <p>터치하여 시작하기</p>
  </div>
</template>
