<template>
<div id="wrapper">
    <h1>Correct Guesses: {{score}}</h1>
    <h1>Incorrect Guesses: {{wrong}}</h1>
</div>
</template>

<script>
import { mapState } from 'vuex'/*
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'*/

export default {
  name: 'scoreboard',
  data () {
    return {
    }
  },
  computed: {
     ...mapState([
         'score',
         'wrong'
    ])/*,
    ...mapGetters([
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
h1 {
  font-weight:300;
}
</style>
