import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// Only use render when extending a React Component.
// When declaring a component, just straight to return.

// root url for unsplash: https://api.unsplash.com/
// Found under Schema: Location under Unsplash
class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID By9u1-xPR1x2JTSOWkQEkboV5-mb09FJxJBSk3drlfM'
      }
    });
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
// const App = () => {
//   return (
//     <div className='ui container' style={{ marginTop: '10px' }}>
//       <SearchBar />
//     </div>
//   );
// }

export default App;
