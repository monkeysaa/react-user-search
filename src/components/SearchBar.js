import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value)
  // }
  state = { term: '' };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
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
  {/* <input
type="text"
value={this.state.term}
onChange={e=> this.setState({ term: e.target.value })}
/> */}
// Every keystroke, the render method called and the value re-renders.

export default SearchBar;
