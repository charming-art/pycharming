<template>
  <div class="example-preview-grid">
    <a
      v-for="example in examples"
      :key="example.path"
      :href="example.path"
      :title="example.title"
      class="example-preview-card"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div
        class="example-preview-thumbnail"
        :style="{ backgroundImage: `url(${example.thumbnail})` }"
      ></div>
      <div class="example-preview-title">{{ example.title }}</div>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  examples: {
    type: Array,
    required: true,
  },
})

const handleMouseEnter = (event) => {
  event.currentTarget.style.borderColor = 'var(--vp-c-brand)'
}

const handleMouseLeave = (event) => {
  event.currentTarget.style.borderColor = 'var(--vp-c-divider)'
}
</script>

<style scoped>
.example-preview-grid {
  display: grid;
  grid-gap: 0.875rem;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  margin: 1.5rem 0;
}

.example-preview-card {
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  font: 400 0.75rem var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  width: 100%;
  text-decoration: none;
  border: solid 1px var(--vp-c-divider);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.2s ease;
  background-color: var(--vp-c-bg);
}

.example-preview-card:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-text-1);
}

.example-preview-thumbnail {
  width: 100%;
  padding-top: 62.5%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.example-preview-title {
  width: 100%;
  padding: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.875rem;
  line-height: 1.4;
}
</style>

