<template>
  <div class="flex flex-col" v-for="(feature, index) in features" :key="index">
    <img
      v-if="feature.image"
      :src="feature.image"
      alt=""
      class="mb-4 rounded-lg aspect-[16/9] object-cover object-center"
    />
    <dt class="mt-auto text-base font-semibold leading-7 text-gray-900">
      <div
        v-if="feature.icon"
        class="flex items-center justify-center w-10 h-10 mb-6 bg-indigo-600 rounded-lg"
      >
        <component
          :is="feature.icon"
          class="w-6 h-6 text-white"
          aria-hidden="true"
        />
      </div>
      {{ feature.name }}
    </dt>
    <dd class="mt-1 text-base leading-7 text-gray-600">
      {{ feature.description }}
    </dd>
  </div>
</template>

<script>
  export default {
    props: {
      features: Array,
    },
  };
</script>
