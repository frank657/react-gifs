import React, { Component } from 'react';
import Gif from './gif';
import SearchBar from './searchBar';
import GifList from './gifList';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: '2wYYlHuEw1UcsJYgAA',
      gifs: []
    };

    this.search('pokemon');
  }

  search = (query) => {
    giphy('KLnzwEQ5RfKUt1T70L841DUn2szhkvwE').search({
      q: query,
      limit: 10
    }, (err, res) => {
        console.log(res.data);
        this.setState ({
          gifs: res.data
        });
    });
  }

  selectGif = (gifId) => {
    this.setState ({ selectedGifId: gifId });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} id={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
