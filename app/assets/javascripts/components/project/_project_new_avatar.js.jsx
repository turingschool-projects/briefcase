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
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

    return (
      <div className="portfolio-image-upload outer">
        <div className='button-input inner'><input id='file-input' className="file fileInput" type="file" onChange={this.handleImageChange} /></div>
        <div className="imgPreview">
          {$imagePreview}
        </div>
<<<<<<< HEAD:app/assets/javascripts/components/project/_project_new_avatar.js.jsx
        <div className='button-input inner'><input id='file-input-avatar' className="file-input" type="file" onChange={this.handleImageChange} /></div>
=======
>>>>>>> master:app/assets/javascripts/components/portfolio/new/_portfolio_new_avatar.js.jsx
      </div>
    )
  }

});
