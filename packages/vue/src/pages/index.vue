<script setup lang="ts">
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { VITE_APP_TITLE } = import.meta.env
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" :href="REPO_URL" target="_blank">
        {{ VITE_APP_TITLE }}
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vixt Starter Template (Vue)</em>
    </p>

    <div py-4 />

    <TheInput v-model="name" placeholder="What's your name?" autocomplete="false" @keydown.enter="go" />

    <div>
      <button m-3 text-sm btn :disabled="!name" @click="go">
        Go
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  title: Home
</route>
