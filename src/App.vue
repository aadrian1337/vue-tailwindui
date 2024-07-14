<script>
  import { defineComponent } from "vue";
  import HomeHero from "./components/HomeHero.vue";
  import SiteHeader from "./components/SiteHeader.vue";
  import Modal from "./components/Modal.vue";
  import Card from "./components/Card.vue";
  import {
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
    PencilSquareIcon,
    TrashIcon,
    DevicePhoneMobileIcon,
  } from "@heroicons/vue/24/outline";

  export default defineComponent({
    components: {
      HomeHero,
      SiteHeader,
      Modal,
      Card,
    },

    data() {
      return {
        features: [
          {
            name: "Feature 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id auctor dui.",
            image: "./src/assets/img/image2.webp",
          },
          {
            name: "Feature 2",
            description:
              "Lorem amet, consectetur adipiscing elit. Vivamus id auctor dui.",
            icon: HeartIcon,
            image: "./src/assets/img/image1.webp",
          },
          {
            name: "Feature 3",
            description:
              "Lorem ipsum dolor, consectetur adipiscing elit. Vivamus id auctor dui.",
            icon: PencilSquareIcon,
            image: "./src/assets/img/image3.webp",
          },
          {
            name: "Feature 4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus.",
            icon: TrashIcon,
            image: "./src/assets/img/image1.webp",
          },
          {
            name: "Feature 5",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing id auctor dui.",
            icon: DevicePhoneMobileIcon,
            image: "./src/assets/img/image2.webp",
          },
        ],
      };
    },
  });
</script>

<template>
  <SiteHeader />
  <HomeHero />
  <section class="sm:px-6 lg:px-8 px-4 py-24">
    <div class="max-w-7xl grid w-full grid-cols-3 gap-8 mx-auto">
      <Card :features="features" />
    </div>
  </section>
</template>

<style scoped></style>
