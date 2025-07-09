import React, { Component } from 'react';
import Corousel from './Corousel';


export default class CarouselCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
    };
  }

  handleNext = () => {
    const { data } = this.props;
    const { startIndex } = this.state;
    if (startIndex + 4 < data.length) {
      this.setState({ startIndex: startIndex + 1 });
    }
  };

  handlePrev = () => {
    const { startIndex } = this.state;
    if (startIndex > 0) {
      this.setState({ startIndex: startIndex - 1 });
    }
  };

  render() {
    const { data } = this.props;
    const { startIndex } = this.state;

    // const visibleCards = data.slice(startIndex, startIndex + 4);

    return (
      <div className="carousel-wrapper">
        <button onClick={this.handlePrev} className="carousel-btn" disabled={startIndex === 0}>
          {'<'}
        </button>

        <div className="carousel-track-container">
          <div className="carousel-track" style={{ transform: `translateX(-${startIndex * 274}px)` }}>
            {data.map((res, i) => (
              <div className="carousel-card" key={i}>
                <Corousel
                  imgSrc={res.imgSrc}
                  header={res.header}
                  desc={res.desc}
                  details={res.details}
                  button={res.button}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={this.handleNext}
          className="carousel-btn"
          disabled={startIndex + 4 >= data.length}
        >
          {'>'}
        </button>
      </div>
    );
  }
}