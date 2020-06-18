<template>
    <div>
        <div id="edit-block">
            <input type="text" name="inp-title" id="inp-title" placeholder="Заголовок" v-model="title">
            <div class="inp-list-item-wrapper" v-for="(item, ind) in listOldItems">
                <!-- <div><input type="checkbox" id="check-list-item"></div> -->
                <font-awesome-icon :class="{checkbox: true, done: item.isDone}" @click="item.isDone = !item.isDone" :icon="valueToIcon(item.isDone)" />
                <!-- <checkbox v-bind:value="item.isDone" @click=""/> -->
                <div><input type="text" name="inp-list-item" id="inp-list-item" v-model="item.task" :disabled="false"></div>
                <div class="delete-item" @click="deleteListOldItem(ind)"><font-awesome-icon icon="trash" class="delete-list-item"/></div>
            </div>
            <div class="inp-list-item-wrapper" v-for="(item, ind) in listNewItems">
                <!-- <div><input type="checkbox" id="check-list-item"></div> -->
                <!-- <checkbox v-bind:value="item.isDone" /> -->
                <font-awesome-icon :class="{checkbox: true, done: item.isDone}" @click="item.isDone = !item.isDone" :icon="valueToIcon(item.isDone)" />
                <div><input type="text" name="inp-list-item" id="inp-list-item" v-model="item.task" :disabled="false"></div>
                <div class="delete-item" @click="deleteListItem(ind)"><font-awesome-icon icon="trash" class="delete-list-item"/></div>
            </div>
        </div>
        <div id="control-block">
            <div class="edit-button" >
                <font-awesome-icon icon="arrow-left" @click="$router.replace('/')"/>
            </div>
            <div class="create-list-item edit-button" @click="addListItem">
                <font-awesome-icon icon="plus" />
            </div>
            <div class="save-note edit-button" @click="save()">
                <font-awesome-icon icon="save" />
            </div>


        </div>
        <popup />
    </div>
</template>

<script>
// import Checkbox from './toggles/Checkbox'
import Popup from "./Popup"
 
export default {
    data(){
        return {
            listOldItems: [],
            listNewItems: [{task: '', isDone: false}],
            title: '',
            currItemContent: ''
        }
    },
    mounted(){
        if (this.$route.params.id) {
            let id = this.$route.params.id
            this.listOldItems = JSON.parse(JSON.stringify(this.$store.state.listNotes[id].listItems))
            
            this.title = this.$store.state.listNotes[id].title
            // console.log(this.listNewItems)
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
        deleteListOldItem(index){
            // this.listNewItems.slice(index, 1)
            this.$delete(this.listOldItems, index)
        },
        save(){
            if ( this.title == "" && this.listOldItems == [] && this.listNewItems.length == 1 ) {
                this.$store.commit("showPopup", "Пустая заметка не будет сохранена, внесите данные");
            }
            else if (!this.title == "" && this.listNewItems[0].title != "" && !this.$route.params.id)
            {
                let payload = {
                    title: this.title,
                    listItems: this.listNewItems,
                    date: new Date()
                } 
                this.$store.commit('createNote', payload)
                this.$router.replace('/')
            }
            else{
                if(this.listNewItems.length == 1 && this.listNewItems[0].task == ''){
                    this.$store.commit("editNote", [this.title, this.listOldItems, this.$route.params.id])
                }
                else{
                    let actualListItems = this.listOldItems.concat(this.listNewItems)
                    this.$store.commit("editNote", [this.title, actualListItems, this.$route.params.id])
                }
                this.$router.replace('/')
            }
        },
        valueToIcon(val){
           return val ? 'check-circle' : 'circle'
        },
        test(){
            console.log(this.listNewItems)
        }
    },
    components: {
        // 'checkbox': Checkbox,
        'popup': Popup
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
        width: 576px

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

    .checkbox
        font-size: 2em
        margin: 0px 12px
        color: #993c41

    .done
        color: green
</style>