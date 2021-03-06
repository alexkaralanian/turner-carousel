import React from 'react';
import './ImageCarousel.css';
import Image1 from "../images/1.jpg"
import Image2 from "../images/2.jpg"
import Image3 from "../images/3.jpg"
import Image4 from "../images/4.jpg"
import Image5 from "../images/5.jpg"
import Image6 from "../images/6.jpg"
import Image7 from "../images/7.jpg"
import Image8 from "../images/8.jpg"
import Image9 from "../images/9.jpg"
import RightArrow from "../images/RightArrow.svg"
import LeftArrow from "../images/LeftArrow.svg"

// Image API
let imageURLs = [
  { id: Image1, alt: 'Cityscape', caption: 'A panoramic city skyline at dusk.'},
  { id: Image2, alt: 'Mountainous Valley', caption: 'A hiker conquering a mountainous green valley.'},
  { id: Image3, alt: 'Rustic Country Porch', caption: 'A rustic country porch surrounded by lush vegetation.'},
  { id: Image4, alt: 'Stack of Business Books', caption: 'A stack of business books for startup entrepeneurs.' },
  { id: Image5, alt: 'Man in Business Suit', caption: 'A man in a business suit ready to conquer the world.' },
  { id: Image6, alt: 'Pair of Eyeglasses', caption: 'A pair of eyeglasses over a blurred streetscape.' },
  { id: Image7, alt: 'Homes on Cliff By Lake', caption: 'Beautiful homes on a rocky cliff overlook a mystic lake.'},
  { id: Image8, alt: 'Man in Business Suit Reading a Chart', caption: 'Man in a business suit analyzing a chart on his iPad.'},
  { id: Image9, alt: 'People at Bar Overlooking a Cityscape',  caption: 'People seated at a bar, overlooking a city skyline.'}
]

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

class ImageCarousel extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      imageIndex: 0
    }
    this.nextImage = this.nextImage.bind(this)
    this.prevImage = this.prevImage.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)

    shuffle(imageURLs)
  }

  nextImage(){
    if (this.state.imageIndex < imageURLs.length - 1) {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      })
    }
  }

  prevImage(){
     if (this.state.imageIndex > 0) {
      this.setState({
        imageIndex: this.state.imageIndex - 1
      })
    }
  }

  onKeyPress(e){
    if (e.key === 'ArrowRight'){
      this.nextImage()
    }

    if (e.key === 'ArrowLeft'){
      this.prevImage()
    }
  }

  render(){
    return (
        <div className="ImageContainer" onKeyDown={(e) => this.onKeyPress(e)} tabIndex="0">
          <div onClick={this.nextImage} className="RightArrow">
            <img className="Icon" src={RightArrow} alt="Right-Arrow-Icon" />
          </div>
          <div onClick={this.prevImage} className="LeftArrow">
            <img className="Icon" src={LeftArrow} alt="Left-Arrow-Icon" />
          </div>
          <figure>
              <img
                className="Image" src={imageURLs[this.state.imageIndex].id}
                alt={imageURLs[this.state.imageIndex].alt}
              />
            <figcaption>
              <span>{imageURLs[this.state.imageIndex].caption}</span>
            </figcaption>
          </figure>
        </div>
    );
  }
}

export default ImageCarousel;
