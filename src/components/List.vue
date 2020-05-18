<template>
  <div>
    <div id="control_panel">
      <router-link to="/edit" tag="div" id="create-note-but-wraper">
        <font-awesome-icon id="create-note-but" icon="plus" />
      </router-link>
    </div>
    <router-link to="/" tag="div" class="note-item" v-for="(noteItem, index) in $store.state.listNotes">
      <div class="preview">
        <h2>{{noteItem.title}}</h2>
        <ul>
          <li>{{noteItem.listItems[0].task}}</li>
          <li v-if="noteItem.listItems[1] != undefined">{{noteItem.listItems[1].task}}</li>
          <li v-if="noteItem.listItems[1] != undefined">...</li>
        </ul>
      </div>
      <div class="delete-but-wrapper" @click="deleteNote(index)">
          <font-awesome-icon class="delete-note-but"  icon="trash-alt" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  // Временная структура данных для заметок
  data() {
    return {};
  },
  methods:{
      deleteNote(index){
          this.$store.commit('deleteNote', [index, this.$delete])
      }
  }
};
</script>

<style lang="sass">

    $colorHoverPrew: #f79797
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

    ul
        padding-left: 20px

    #control_panel
        display: flex

    #create-note-but
        color: $colorFont

    #create-note-but-wraper
        font-size: 2.4em
        padding: 10px

    .delete-note-but
        font-size: 2.4em  

    .delete-but-wrapper 
        padding: 13px
        justify-content: center
        align-content: center
        display: flex
        padding-top: calc(50% - 5px)
        color: $colorDeleteBut

        &:hover
            background: red
            color: white  !important           
        &:visited
            background: red
            color: white
    

</style>