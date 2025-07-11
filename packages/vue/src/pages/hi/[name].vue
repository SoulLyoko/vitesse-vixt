<script setup lang="ts">
const router = useRouter()
const route = useRoute('/hi/[name]')
const user = useUserStore()
watchEffect(() => {
  user.setNewName(route.params.name)
  useTitle(`Hi, ${route.params.name}!`)
})
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>
      Hi, {{ user.savedName }}
    </p>

    <p text-sm op-75>
      <em>Dynamic route!</em>
    </p>

    <template v-if="user.otherNames.length">
      <div mt-4 text-sm>
        <span op-75>Aka:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>

    <div>
      <button m-3 mt-6 text-sm btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
