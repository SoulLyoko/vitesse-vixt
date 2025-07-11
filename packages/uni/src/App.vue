<script setup lang="ts">
onPageNotFound(() => {
  uni.navigateTo({ url: '/404' })
})
</script>
