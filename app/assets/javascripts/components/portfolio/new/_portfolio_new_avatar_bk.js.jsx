var PortfolioNewAvatarBk = React.createClass({
  getInitialState: function(){
    return{
      user: this.props.user,
      saving: false,
      files: [],
      preview: false
    }
  },

  handleNew(e){
    e.preventDefault();

    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      this.setState({
          files: [reader.result], preview: true
      })
    }.bind(this);
  },

  handleSaveAvatar(){
    debugger
    this.setState({ saving: true });

    var fd = $(this.refs.myForm).context;
    var formData = new FormData(fd);
    var user = this.props.user;

    axios.post(`/users/${user.id}/portfolio.json`, {portfolio: formData})
    .then(response => {
      console.log("success");
      window.location = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  },


  render: function() {
    return (
      <div>
        <form ref="myForm" encType="multipart/form-data">
          <input ref="file" type="file" name="file" className="upload-file" multiple="true" onChange={this.handleNew}/>
          <input type="hidden" name="user[avatar]" value={this.state.files} multiple="true" />
          <button onClick={this.handleSaveAvatar}>Save</button>
        </form>
      </div>
    )
  }

});
