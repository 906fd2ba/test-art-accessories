<script setup lang="ts">
import treeItems from "~/assets/tree.json";
const { locale } = useLocaleSelector();
</script>

<template>
    <div class="page">
        <p class="mb-5">locale: {{ locale }}</p>

        <TreeItem
            v-for="item of treeItems"
            :key="item.id"
            :item="item"
        />
    </div>
</template>
