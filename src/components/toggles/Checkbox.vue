<template>
    <div>
        <font-awesome-icon :class="{checkbox: true, done: value}" @click="value = !value" :icon="valueToIcon(value)" />
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods:{

    }
}
</script>

<style lang="sass">

</style>