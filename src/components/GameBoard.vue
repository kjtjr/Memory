<template>
  <div id="gameboard">
    <div class="card" v-for="number in numbers" @click="getValue"><span >{{number}}</span></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'/*
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'*/

export default {
  name: 'gameboard',
  data () {
    return {
    }
  },
  computed: {
     ...mapState([
       'numbers'
    ])/*,
    ...mapGetters([
    ]),
    ...mapMutations([
    ]),
    ...mapActions([
    ]), */
  },
  methods: {
    getValue(cardValue) {
      this.$store.commit('setCardValue',cardValue)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gameboard {
  width:450px;
  display: flex;
  flex-wrap:wrap;
}
.card {
  height: 100px;
  width:100px;
  border-style: solid;
  border-width:1px;
  border-color:black;
  display: flex;
  align-items:center;
  justify-content: center;
  margin:5px;
  border-radius:5px;
  transition: background-color 0.5s ease;
  background:steelblue;
  color:white;
  cursor:pointer;
}
span {
  font-family: Calibri;
  font-size:3em;
  pointer-events: none;
  display:none;
}
.green{
  background-color:green;
}

.gray {
  background-color:gray;
  pointer-events:none;
}
.gray span {
  display:block;
}

.matched {
  transition: background-color 0.5s ease;
  background-color:green;
  pointer-events: none;
  cursor:not-allowed;
}

.matched span {
  display:block;
}

.wrong {
  transition: background-color 0.5s ease;
  background-color: red;
}


</style>
