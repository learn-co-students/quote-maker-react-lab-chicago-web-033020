// TODO: Create action creators as defined in tests
// remember to export these functions!!! these are used elsewhere 
// actions are imported into components that need them 

export const addQuote = (quoteObj) => {
  return {
    type: "ADD_QUOTE",
    quote: {...quoteObj, votes: 0}
  };
}

export const removeQuote = (quoteId) => {
  return {
    type: "REMOVE_QUOTE",
    quoteId
  };
}

export const upvoteQuote = (quoteId) => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  };
}

export const downvoteQuote = (quoteId) =>{
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  };
}
