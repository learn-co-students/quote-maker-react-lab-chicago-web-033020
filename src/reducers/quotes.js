import uuid from 'uuid';
 
const id = uuid();
console.log(id) 

export default (state = [], action) => {
  let idx;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]  
    
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return quote.votes ? {...quote, votes: quote.votes + 1} : {...quote, votes:1 };
        } else {
          return quote;
        }
      })

    case "DOWNVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return quote.votes > 0 ? { ...quote, votes: quote.votes - 1 } : quote;
        } else {
          return quote;
        }
      });
    default:
      return state;

  }


}
