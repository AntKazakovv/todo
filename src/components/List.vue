<template>
    <div>
        <router-link to="/" tag="div" class="note-item"  v-for="noteItem in $store.state.listNotes">
            <h2>{{noteItem.title}}</h2>
            <ul>
                <li>{{noteItem.listItems[0].task}}</li>
                <li>{{noteItem.listItems[1].task}}</li>
                <li>...</li>
            </ul>
        </router-link>
    </div>
</template>

<script>
export default {
    // Временная структура данных для заметок
    data(){
        return {
            
        }
    }

}
</script>

<style lang="sass">
    .note-item
        padding: 13px
        border-bottom: 2px solid white

        &:hover
            background: #f79797
    
    ul
        padding-left: 20px
</style>