<template>
    <div>
        <div id="edit-block">
            <input type="text" name="inp-title" id="inp-title" placeholder="Заголовок" v-model="title">
            <div class="inp-list-item-wrapper" v-for="(item, ind) in listNewItems">
                <!-- <div><input type="checkbox" id="check-list-item"></div> -->
                <checkbox v-bind:value="item.isDone" />
                <div><input type="text" name="inp-list-item" id="inp-list-item" v-model="item.task" :disabled="false"></div>
                <div class="delete-item" @click="deleteListItem(ind)"><font-awesome-icon icon="trash" class="delete-list-item"/></div>
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
import Checkbox from './toggles/Checkbox'
 
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
            let payload = {
                title: this.title,
                listItems: this.listNewItems,
                date: new Date()
            } 
            this.$store.commit('createNote', payload)
            this.$router.replace('/')
        },
        test(){
            console.log(this.listNewItems)
        }
    },
    components: {
        'checkbox': Checkbox
    }
}
</script>

<style lang="sass">
    
    .inp-list-item-wrapper 
        display: flex
        align-content: center
        background: #ffebec57
        padding: 10px 0px
        margin: 3px 0px
    

    #inp-list-item 
        background-color: #c8575d
        border: none
        padding: 5px 0px
        font-size: 1.4em
        color: white
        width: 380px

    #control-block
        display: flex
    
    .edit-button
        font-size: 1.5em
        padding: 10px
        
    #inp-title 
        background-color: #ee4e56
        font-size: 2.4em
        border: none
        border-bottom: 2px solid white
        margin: 14px 0px
        color: aliceblue

    #check-list-item
        color: white

    .delete-item
        font-size: 2em
        padding: 0px 17px
        color: #5e5757


</style>