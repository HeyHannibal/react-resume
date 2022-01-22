import React, { Component } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
          <div id='uploadPhotoDiv'>
            <img src={this.state.image} />
            <input id='photoInput' type="file" name="myImage" onChange={this.onImageChange} hidden />
            <label htmlFor='photoInput' id='styleUploadBtnLabel'>
              <AccountBoxIcon />
            </label>
            <label id='uploadPhotoLabel'>Upload Photo</label>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayImage