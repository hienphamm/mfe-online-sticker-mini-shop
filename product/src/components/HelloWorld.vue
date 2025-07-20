<script setup lang="ts">
import "../style.css"
defineProps({
	msg: {
		type: String
	}
});
</script>

<template>
	<h1>{{ msg }}</h1>
  <h1 class="text-3xl font-bold text-blue-600">
    Hello Tailwind CSS 4.x + Vue 3!
  </h1>
  <ui-button variant="primary" disabled>Hello button</ui-button>
</template>