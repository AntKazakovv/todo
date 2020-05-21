<template>
  <div id="app">
    <div id="rigth-col"></div>
    <div id="middle-col">
      <div id="content">
        <router-view/>
      </div>
    </div>
    <div id="left-col"></div>


  </div>
</template>

<script>



export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

<style lang="sass">

  // variables
  $backColor: #ee4e56

  * 
    margin: 0px
    padding: 0px
    font-family: Arial
    // color: white
    // background-color: $backColor
  
  #app
    display: grid
    grid-template-columns: 1fr 700px 1fr
    background-color: $backColor
    height: 51vw

  #content
    padding-top: 129px

</style>
