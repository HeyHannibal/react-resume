/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      this.props.addImg(URL.createObjectURL(img));
    }
  };

  render() {
    return (
      <div>
        <div>
          <div id="uploadPhotoDiv">
            <input id="photoInput" type="file" name="myImage" onChange={this.onImageChange} hidden />
            <label htmlFor="photoInput" id="styleUploadBtnLabel">
              <AccountBoxIcon />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayImage;
