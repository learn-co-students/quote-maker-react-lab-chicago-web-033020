import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  upVoteQuoteHandler = (id) => {
    // console.log('upvoted', id)
    this.props.upvoteQuote(id)
  }

  downVoteQuoteHandler = (id) => {
    // console.log('downvoted', id)
    // let foundQuote = this.props.quotes.find(quote => {
    //   return quote.id === id
    // })

    // if (foundQuote.votes > 0) {
    //   this.props.downvoteQuote(id)
    // }

    this.props.downvoteQuote(id)
  }

  removeQuoteHandler = (id) => {
    // console.log('removed', id)
    this.props.removeQuote(id)
  }

  renderQuotes = () => {
    return this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} remove={this.removeQuoteHandler} upvote={this.upVoteQuoteHandler} downvote={this.downVoteQuoteHandler} />)
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upvoteQuote: (id) => {
      dispatch(upvoteQuote(id))
    },
    downvoteQuote: (id) => {
      dispatch(downvoteQuote(id))
    },
    removeQuote: (id) => {
      dispatch(removeQuote(id))
    }
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
