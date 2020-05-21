<template>
    <div>
        <font-awesome-icon :class="{checkbox: true, done: value}" @click="value = !value" :icon="valueToIcon(value)" />
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods:{
        valueToIcon(val){
           return val ? 'check-circle' : 'circle'
        }
    }
}
</script>

<style lang="sass">
    .checkbox
        font-size: 2em
        margin: 0px 12px
        color: #993c41

    .done
        color: green
</style>