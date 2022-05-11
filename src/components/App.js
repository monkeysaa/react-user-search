import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

// Only use render when extending a React Component.
// When declaring a component, just straight to return.

// root url for unsplash: https://api.unsplash.com/
// Found under Schema: Location under Unsplash
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
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
