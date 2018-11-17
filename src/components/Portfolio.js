import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import image1 from "./assets/images/catalina.jpg"
import image2 from "./assets/images/costrice.jpg"
import image3 from "./assets/images/prague.jpg"
import image4 from "./assets/images/sunset.jpg"

const items = [
    {
    src: image1,
      altText: 'Slide 1',
      caption: 'A simple App showing the use of mustache handlebars, building a custom ORM, and an interactive frontend',
      linkURL: 'https://warm-hollows-14415.herokuapp.com/'
    },
    {
      src: image2,
      altText: 'Slide 2',
      caption: 'App demostrating use of Jquery to make a hang man type of game',
      linkURL: 'https://raakhus.github.io/word_guess/'
    },
    {
      src: image3,
      altText: 'Slide 3',
      caption: 'an interactive memory game in react',
      linkURL: 'https://southparkmemory.herokuapp.com/'
    },
    {
      src: image4,
      altText: 'Slide 4',
      caption: 'Demostrates the use of the NYT API',
      linkURL: 'https://useofanapi.herokuapp.com/'
    }
  ];
  
  class Portfolio extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
            
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
           <a href={item.linkURL} target="_blacnk">
            <img className="porfolioLinks" src={item.src} alt={item.altText} />
            </a>
            <CarouselCaption captionText={item.caption} /*captionHeader={item.caption}*/ />
          </CarouselItem>
        );
      });
  
      return (
          <div className="container">
          <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </div>
        <div className="col-sm-2"></div>
        </div>
        </div>
      );
    }
  }
  
  
  export default Portfolio;

