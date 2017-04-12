var ProjectNewAvatar = React.createClass({
  getInitialState(){
    return {
      file: '',
      imagePreviewUrl: ''
    }
  },

  handleSubmit() {
    var stateToUpdate = {};
    var fieldToUpdate;

    stateToUpdate.avatar = this.state.file; fieldToUpdate = "avatar"
    this.props.prepForInsert(stateToUpdate, fieldToUpdate);
  },

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: reader.result,
        imagePreviewUrl: reader.result
      });
      this.handleSubmit();
    }

    reader.readAsDataURL(file)
  },

  render() {
    var imagePreviewUrl = this.state.imagePreviewUrl;
    var imagePreview = null;
    if (imagePreviewUrl != '') {
      $imagePreview = (<img alt="image preview" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

    return (
      <div className="portfolio-image-upload outer">
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <div className='button-input inner'><input id='file-input-avatar' className="file-input" type="file" aria-label="File Input" onChange={this.handleImageChange} /></div>
      </div>
    )
  }

});
