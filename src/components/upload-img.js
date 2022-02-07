import React, { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

let UploadImg = (props) => {
  const [image, setImage] = useState(null)

 function onImageChange (event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      props.onChange(URL.createObjectURL(img))
    }
  };

    return (
      <div>
        <div>
          <div id='uploadImgDiv'>
            <input id='photoInput' type="file" name="myImage" onChange={onImageChange} hidden />
            <label htmlFor='photoInput' id='styleUploadBtnLabel'>
              <AccountBoxIcon />
            </label>
            <label id='uploadImgLabel'>Upload Photo</label>
          </div>
        </div>
      </div>
    );
  
}

export default UploadImg