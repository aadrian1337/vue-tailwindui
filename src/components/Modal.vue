<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="sm:p-0 flex items-center items-end justify-center min-h-full p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="sm:my-8 sm:max-w-sm sm:p-6 relative w-full px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl"
            >
              <div>
                <div
                  class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full"
                >
                  <CheckIcon
                    class="w-6 h-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="sm:mt-5 mt-3 text-center">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                    >{{ title }}</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      {{ description }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="sm:mt-6 flex flex-col items-center mt-5">
                <button
                  type="button"
                  class="hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm"
                  @click="open = false"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
  import { ref } from "vue";
  import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  } from "@headlessui/vue";
  import { CheckIcon } from "@heroicons/vue/24/outline";

  const open = ref(false);
  function toggleModal() {
    open.value = !open.value;
  }
  // Use defineExpose to expose the toggleModal function
  defineExpose({ toggleModal });

  const props = defineProps({
    title: {
      type: String,
      default: "Modal Title",
    },
    description: {
      type: String,
      default: "Modal Description",
    },
  });
</script>
