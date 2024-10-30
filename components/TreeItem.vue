<script setup lang="ts">
const { item } = defineProps({
    item: { type: Object, required: true },
    path: { type: Array, default: [] },
});

const { getLocalizedString } = useLocaleSelector(item.locale);

const name: ComputedRef<string> = computed(() => getLocalizedString('cg_name'));
const desc: ComputedRef<string> = computed(() => getLocalizedString('cg_description'));
const link: ComputedRef<string> = computed(() => '/' + getLocalizedString('link') + item.id);

// const childrenCount: number = item.numchild || 0; // некорректно подсчитано в двух местах (id 7 и 12)
const childrenCount: number = item.childs?.length || 0;

const expanded: Ref<boolean> = ref(false);
</script>

<template>
    <div class="p-2" :class="{ 'pl-5': item.depth > 1 }">
        <div>id: {{ item.id }}</div>
        <div>name: <RouterLink :to="link">{{ name }}</RouterLink></div>
        <div v-if="desc">desc: {{ desc }}</div>
        <div v-if="path.length">breadcrumbs: {{ path.join(' -> ') }}</div>

        <template v-if="childrenCount">
            <div>{{ childrenCount }} nested items</div>

            <button class="expand" @click="expanded = !expanded">
                {{ !expanded ? 'expand' : 'collapse' }}
            </button>

            <TreeItem
                v-show="expanded"
                v-for="child of item.childs"
                :key="child.id"
                :item="child"
                :path="[ ...path, name ]"
            />
        </template>
    </div>
</template>

<style scoped>
a, button {
    color: #38bdf8;

    &:hover {
        color: #0ea5e9;
    }
}
</style>
