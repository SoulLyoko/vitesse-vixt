<script setup lang="ts">
const user = useUserStore()
const name = ref(user.savedName)

function go() {
  if (name.value)
    uni.navigateTo({ url: `/hi?name=${encodeURIComponent(name.value)}` })
}

const { VITE_APP_TITLE } = import.meta.env
</script>

<template>
  <div>
    <div text-4xl inline-block i-carbon-campsite />
    <p>
      <a :href="BASE_URL">
        {{ VITE_APP_TITLE }}
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vixt Starter Template (Uni-app)</em>
    </p>

    <div py-4 />

    <TheInput v-model="name" placeholder="What's your name?" autocomplete="false" m-auto h-10 />

    <div>
      <button text-sm m-3 btn :disabled="!name" @click="go">
        Go
      </button>
    </div>
  </div>
</template>

<route type="home" lang="yaml">
layout: home
style:
  navigationBarTitleText: Home
</route>
