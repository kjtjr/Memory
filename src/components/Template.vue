<template>
<div id = "wrapper">
  <h1>Memory</h1>
  <scoreBoard></scoreBoard>
  <gameBoard></gameBoard>
</div>
</template>

<script>
import GameBoard from './GameBoard'
import ScoreBoard from './ScoreBoard'
import { mapState } from 'vuex'/*
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'*/

export default {
  name: 'template',
  components: {
    'scoreBoard':ScoreBoard,
    'gameBoard':GameBoard
  },
  data () {
    return {
    }
  },
  computed: {
     ...mapState([
       'score',
       'wrong'
    ]),
    /*...mapGetters([
    ]),
    ...mapMutations([
    ]),
    ...mapActions([
    ]), */
  },
  methods: {
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
