export default (state = [], action) => {
  let idx

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'UPVOTE_QUOTE':
      const upVoteQuotes = state.map(quote => {
        if (quote.id !== action.quoteId) {
          return quote
        } else {
          return {...quote, votes: quote.votes + 1 }
        }
      })
      return upVoteQuotes
    case 'DOWNVOTE_QUOTE':
      const downVoteQuotes = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {...quote, votes: quote.votes - 1 }
        } else {
          return quote
        }
      })
      return downVoteQuotes
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    default:
      return state
  }
}
