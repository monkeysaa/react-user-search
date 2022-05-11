import React from 'react';

class SearchBar extends React.Component {
  // Takes in a key in the SearchBar
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}


//UNCONTROLLED ELEMENT
// This means the data is stored in the HTML elements, vs. in React Components
//     <input type="text" onChange={(e)=> console.log(e.target.value)} />

// CONTROLLED ELEMENT
  // state = { term: '' };
  // *LATER*

// Every keystroke, the render method called and the value re-renders.

// onFormSUBMIT
  // DON'T DO IT LIKE THIS, because in this setup, "this" will be broken
  // UNLESS
  // you build an arrow function into the code where onFormSubmit is written:
  //     <form onSubmit={(event) => this.onFormSubmit(event)} className...
  // Confused? Review Lessons 89 & 90 again.

  // onFormSubmit(event) {
  //   event.preventDefault();

  //   console.log(this.state)
  // }

  // function above is shorthand for
  // onFormSubmit: function(event) {
  //  event.preventDefault()
  //  console.log(this.state)
  // }

export default SearchBar;
