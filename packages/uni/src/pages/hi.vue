<script setup lang="ts">
const query = useQuery()
const user = useUserStore()
watchEffect(() => {
  user.setNewName(query.name)
  uni.setNavigationBarTitle({ title: `Hi, ${query.name}!` })
})

function back() {
  uni.navigateBack()
}
</script>

<template>
  <div>
    <div text-4xl inline-block i-carbon-pedestrian />
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
            <navigator :url="`/hi?name=${encodeURIComponent(otherName)}`" open-type="redirect">
              {{ otherName }}
            </navigator>
          </li>
        </ul>
      </div>
    </template>

    <div>
      <button text-sm btn m-3 mt-6 @click="back">
        Back
      </button>
    </div>
  </div>
</template>
