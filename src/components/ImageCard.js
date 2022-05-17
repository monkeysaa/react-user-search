import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
    // this doesn't work -- it reaches for info before there's an image loaded!
    // console.log(this.imageRef.current.clientHeight);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // add 1 to round up to the next highest row
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  render(){
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
