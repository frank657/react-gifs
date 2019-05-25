import React, { Component } from 'react';

class Gif extends Component {
  clicked = (e) => {
    console.log(this.props.id)
    this.props.selectGif(this.props.id)
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/100.webp?cid=790b76115ce90c5b4f433739512684f6&rid=100.gif`;
    return (
      <img src={src} alt="" className="gif" data-id={this.props.id} onClick={this.clicked}/>
    );
  }
}

export default Gif;
