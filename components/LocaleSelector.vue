<script setup lang="ts">
const { locale, locales } = useLocaleSelector();
</script>

<template>
    <select v-model="locale">
        <option
            v-for="locale of locales"
            :key="locale.id"
            :value="locale"
            v-text="locale.name"
        />
    </select>
</template>
