<template>
  <div class="relative bg-white">
    <div class="max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 mx-auto">
      <div
        class="sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 px-6 pt-10 pb-24"
      >
        <div class="lg:mx-0 max-w-2xl mx-auto">
          <div class="sm:flex hidden">
            <div
              class="ring-1 ring-gray-900/10 hover:ring-gray-900/20 relative px-3 py-1 text-sm leading-6 text-gray-500 rounded-full"
            >
              Lorem ipsum dolor sit amet id auctor dui.
              <a
                href="#"
                class="whitespace-nowrap font-semibold text-indigo-600"
                ><span class="absolute inset-0" aria-hidden="true" />Read more
                <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
          <h1
            class="sm:mt-10 sm:text-6xl mt-24 text-4xl font-bold tracking-tight text-gray-900"
          >
            Data to enrich your online business
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div class="gap-x-6 flex items-center mt-10">
            <a
              href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Get started</a
            >
            <a
              @click="toggleModal"
              href="#"
              class="text-sm font-semibold leading-6 text-gray-900"
              >Learn more <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
      </div>
      <div
        class="lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 relative"
      >
        <img
          class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          src="/src/assets/img/image2.webp"
          alt=""
        />
      </div>
    </div>
  </div>
  <Modal ref="modalRef" />
</template>

<script setup>
  import { ref } from "vue";
  import { Dialog, DialogPanel } from "@headlessui/vue";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
  import Modal from "./Modal.vue";

  //modal import
  const modalRef = ref(null);
  function toggleModal() {
    if (modalRef.value) {
      modalRef.value.toggleModal();
    }
  }
</script>
