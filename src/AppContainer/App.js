import React, { Component } from 'react';
import './App.css';
import ImageCarousel from "../ImageCarousel/ImageCarousel"
import InputElement from "../InputElement/InputElement"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      array: [],
      slicedArray: [],
      arrayIndex: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchCarousels = this.fetchCarousels.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.keyPress = this.keyPress.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.fetchCarousels(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.state.array.length
    ) {
      this.setState({
        slicedArray: this.state.array.slice(0, this.state.arrayIndex + 15),
        arrayIndex: this.state.arrayIndex + 15
      })
    }
  }

  keyPress(e){
    console.log(e)
  }

  fetchCarousels(inputValue){
    let carouselArray = []
      for (let i = 0; i < inputValue; i++){
        carouselArray.push(
          <ImageCarousel />
      )
      this.setState({
        array: carouselArray,
        arrayIndex: 14,
        slicedArray: carouselArray.slice(0, 15)
      })
    }
  }

  render() {
    return (
      <main className="wrapper">
        <section className="Grid">
          <header className="Row animated fadeInDown">
              <h1 className="CardHeader">
                Turner Carousel
              </h1>
          </header>
          <InputElement
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            inputValue={this.state.inputValue}
          />
        </section>
        {this.state.array.length ?
          <section className="Grid">
            <div className="Row animated fadeInUp" onKeyPress={this.keyPress}>
              {this.state.slicedArray && this.state.slicedArray.map(carousel => <div className="Cell" key={this.state.slicedArray.indexOf(carousel)}>{carousel}</div>)}
            </div>
          </section> : null
        }
      </main>
    );
  }
}

export default App;
