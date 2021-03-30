const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if(action.type === 'REMOVE') {
      return{...state,cart:state.cart.filter((cardItem) => {
          return cardItem.id !==action.payload
      })}
    }
    if(action.type === 'INCREASE') {
         let tempCart = state.cart.map(cardItem => {
           if (cardItem.id === action.payload) {
             return { ...cardItem, amount: cardItem.amount + 1 };
           }
           return cardItem;
         });
         return { ...state, cart: tempCart };
    }

    return state
}

export default reducer