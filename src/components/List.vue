<template>
  <div>
    <div id="control_panel">
      <router-link to="/edit" tag="div" id="create-note-but-wraper">
        <font-awesome-icon id="create-note-but" icon="plus" />
      </router-link>
    </div>
    <router-link
      :to=" `/edit/${index}` "
      tag="div"
      class="note-item"
      v-for="(noteItem, index) in $store.state.listNotes"
    >
      <div class="preview">
        <h2>{{noteItem.title}}</h2>
        <ul>
          <li>{{noteItem.listItems[0].task}}</li>
          <li v-if="noteItem.listItems[1] != undefined">{{noteItem.listItems[1].task}}</li>
          <li v-if="noteItem.listItems[1] != undefined">...</li>
        </ul>
      </div>
      <div class="delete-but-wrapper" @click="generateDeleteNoteFunc(index)">
        <font-awesome-icon class="delete-note-but" icon="trash-alt" />
      </div>
    </router-link>
    <popup v-bind:callb="deleteNoteFunc" />
  </div>
</template>

<script>
import Popup from "./Popup";

export default {
  // Временная структура данных для заметок
  data() {
    return {
      deleteNoteFunc: null
    };
  },
  methods: {
    //функция генерирует функцию для удаления заметки по индексу
    generateDeleteNoteFunc(index) {
      const messagePopup = "Вы действительно хотите удалить заметку?";
      this.deleteNoteFunc = () => {
        this.$store.commit("deleteNote", [index, this.$delete]);
      };
      this.$store.commit("showPopup", messagePopup);
    }
  },
  components: {
    popup: Popup
  }
};
</script>

<style lang="sass">

$colorHoverPrew: #d94a51
$colorDeleteBut: #d94a51
$colorFont: white

.note-item

  border-top: 3px solid #d94a51
  display: grid
  grid-template-columns: 1fr 70px

.preview
  padding: 13px
  color: $colorFont

  &:hover
    background: $colorHoverPrew
    cursor: pointer

ul
  padding-left: 20px

h2
  font-size: 2em
  padding: 6px
  background: #dd3840
  border-radius: 8px

li
  font-size: 1.4em
  background: #a04444
  margin: 4px 0px
  border-radius: 6px
  list-style-type: none
  padding: 1px 10px

#control_panel
  display: flex

#create-note-but
  color: $colorFont

#create-note-but-wraper
  font-size: 2.4em
  padding: 8px 15px
  margin-bottom: 6px
  cursor: pointer

  &:hover
    background: #953434
    border-radius: 36px
  
  // &:active
  //   background: red


.delete-note-but
  font-size: 2.4em

.delete-but-wrapper

  padding: 13px
  justify-content: center
  align-content: center
  display: flex
  padding-top: calc(50% - -30px)
  color: #e8dfdf
  cursor: pointer

  &:hover
    background: #823e3e
    color: white  !important
  &:visited
    background: red
    color: white
</style>