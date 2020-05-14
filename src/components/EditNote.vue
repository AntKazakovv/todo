<template>
    <div>
        <div id="edit-block">
            <input type="text" name="inp-title" id="inp-title" v-model="title">
            <div class="inp-list-item-wrapper" v-for="(item, ind) in listNewItems">
                <div><input type="checkbox" id="check-list-item"></div>
                <div><input type="text" name="inp-list-item" id="inp-list-item" v-model="item.task" :disabled="false"></div>
                <div @click="deleteListItem(ind)"><font-awesome-icon icon="trash" class="delete-list-item"/></div>
            </div>
        </div>
        <div id="control-block">
            <div class="create-list-item edit-button" @click="addListItem">
                <font-awesome-icon icon="plus" />
            </div>
            <div class="save-note edit-button" @click="save()">
                <font-awesome-icon icon="save" />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            listNewItems: [{task: '', isDone: false}],
            title: '',
            currItemContent: ''
        }
    },
    methods: {
        addListItem(){
            this.listNewItems.push({value: '', isDone: false})
        },
        deleteListItem(index){
            // this.listNewItems.slice(index, 1)
            this.$delete(this.listNewItems, index)
        },
        save(){

        },
        test(){
            console.log(this.listNewItems)
        }
    }
}
</script>

<style lang="sass">
    
    .inp-list-item-wrapper
        display: flex

    #inp-list-item
        background-color: #ee4e56

    #control-block
        display: flex
    
    .edit-button
        font-size: 1.5em
        padding: 10px

</style>