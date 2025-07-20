<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { defineCustomElements } from 'mfe-ui-kit/loader';
defineCustomElements()
const title = ref<string>("Rspack + Vue");
</script>

<template>
	<HelloWorld :msg="title" />
</template>
