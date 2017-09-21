export const mutations = {
    setCardValue (state,cardValue) {
        if (state.cardOne == 0 && state.cardTwo == 0){
            state.cardOne = cardValue.srcElement.innerHTML
            cardValue.srcElement.parentNode.className = "card gray"
            
        } else if (state.cardOne != 0 && state.cardTwo == 0){
            state.cardTwo = cardValue.srcElement.innerHTML
            cardValue.srcElement.parentNode.className = "card gray"
            
            state.endTurn = true }
        if (state.endTurn == true){
            if (state.cardOne === state.cardTwo){
                state.score ++
                document.getElementsByClassName("card gray")[0].className = "card matched"
                document.getElementsByClassName("card gray")[0].className = "card matched"
                state.cardOne = 0
                state.cardTwo = 0
                state.endTurn = false
            } else if (state.cardOne != state.cardTwo){
                document.getElementsByClassName("card gray")[0].className = "card wrong"
                document.getElementsByClassName("card gray")[0].className = "card wrong"
                setTimeout(function(){
                    document.getElementsByClassName("card wrong")[0].className = "card"
                    document.getElementsByClassName("card wrong")[0].className = "card"
                }, 1000)                
                state.cardOne = 0
                state.cardTwo = 0
                state.endTurn = false
            }
        }
        console.log(cardValue)
    }
}