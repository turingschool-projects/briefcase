var ProjectEditAvatar = React.createClass({
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
    this.props.prepForUpdate(stateToUpdate, fieldToUpdate);
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
      $imagePreview = (
                          this.props.avatar === "/avatars/original/missing.png"
                            ? <img alt="portfolio avatar" className="" src="http://www.webtutorialspoint.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
                            : <img alt="portfolio avatar" className="" src={this.props.avatar}></img>
                      );
    }

    return (
      <div className="portfolio-image-upload outer">
        <div className="responsive-avatar"></div>
        <div className="img-preview" alt="image preview">
          {$imagePreview}
        </div>
        <div className='button-input inner'><input id='file-input-avatar' className="file-input" type="file" aria-label="File Input" onChange={this.handleImageChange} /></div>
      </div>
    )
  }

});
