var PortfolioNewAvatar = React.createClass({
  getInitialState(){
    return {
      file: '',
      imagePreviewUrl: ''
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    var stateToUpdate = {};
    var fieldToUpdate;
    
    stateToUpdate.avatar = this.state.file; fieldToUpdate = "avatar"
    this.props.prepForInsert(stateToUpdate, fieldToUpdate);
  },

  handleImageChange(e) {
    debugger;
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: reader.result,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  },

  render() {
    var imagePreviewUrl = this.state.imagePreviewUrl;
    var imagePreview = null;
    if (imagePreviewUrl != '') {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="portfolio-image-upload">
          <div className='button-input'><input id='file-input' className="fileInput" type="file" onChange={this.handleImageChange} /></div>
          <div className='button-input'><button id='submit-button' className="submitButton" type="submit" onClick={this.handleSubmit}>Upload Image</button></div>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }

});
