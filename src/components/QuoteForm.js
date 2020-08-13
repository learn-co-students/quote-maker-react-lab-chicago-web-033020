import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

const newId = uuid()


class QuoteForm extends Component {

  state = {
    id: newId,
    content: '',
    author: '',
    votes: 0
  }

  handleOnChange = event => {
    // event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  clearState = () => {
    this.setState({ ...this.state})
  }

  handleOnSubmit = event => {
    // event.stopImmediatePropagation();
    event.preventDefault()
    const data = (this.state);
    
    console.log(data)

    this.props.addQuote(data)
    this.setState({
      id: newId,
      content: '',
      author: ''
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.target.reset();
    // clearState();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form 
                  onSubmit={this.handleOnSubmit} 
                  className="form-horizontal"
                  >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        onChange={this.handleOnChange}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        onChange={this.handleOnChange}
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(null, { addQuote })(QuoteForm);
