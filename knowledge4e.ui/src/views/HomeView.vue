<template>
  <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md" bg-color="info">
    <template v-slot:append>
      <q-icon v-if="text === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup(props) {
      const text = ref('');

      return {
        text
      }
    }

  })
</script>
