import React, { Component } from "react";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
          this.props.onChange(URL.createObjectURL(img), 'photo')

    }
  };

 
  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} />
            <label>Add Photo
            <input type="file" name="myImage" onChange={this.onImageChange} />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayImage