import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
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
              {this.props.quotes.length > 0 
              ? this.props.quotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  removeQuote={this.props.removeQuote}
                  upvoteQuote={this.props.upvoteQuote}
                  downvoteQuote={this.props.downvoteQuote}
                  quote={quote}
                />
              ))
            : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// need to mapStateToProps to utilize the quotes from the store/state
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    quotes: state.quotes,
  };
};

//add arguments to connect as needed
export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote
})(Quotes);
