<template>
  <div class="flex items-center justify-center min-h-screen px-4">
    <div class="flex flex-col items-center">
      <div class="text-6xl font-bold">404</div>
      <div class="mb-6 text-lg font-semibold">
        Lost your way ? <n-link to="/"> Go Back</n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable vue/require-prop-types */
  props: ['error'],
}
</script>
