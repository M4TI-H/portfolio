<script setup lang="ts">
const props = defineProps<{
  text: string;
  active: boolean;
}>();

const animatedText = props.text.split("");
</script>

<template>
  <h1
    class="font-playfair text-lg sm:text-xl xl:text-2xl font-bold w-fit cursor-default group flex"
    :class="{ 'is-animating': active }"
  >
    <span
      v-for="(letter, index) in animatedText"
      :key="index"
      class="wave-char"
      :style="{ animationDelay: `${index * 0.05}s` }"
    >
      {{ letter === " " ? "\u00A0" : letter }}
    </span>
  </h1>
</template>

<style scoped>
@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
    color: #059669;
  }
}

.wave-char {
  display: inline-block;
}

.is-animating .wave-char {
  animation-name: wave;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
}
</style>
