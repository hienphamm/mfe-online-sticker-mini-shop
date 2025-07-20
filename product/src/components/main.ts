import {defineCustomElement} from "vue";
import HelloWorld from "./HelloWorld.vue";
const CustomHelloWorld = defineCustomElement(HelloWorld);
customElements.define("hello-world", CustomHelloWorld);