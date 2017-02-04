var DashboardProfile = React.createClass({
  render: function(){
    var user = this.props.user;
    return(
      <div classsName="card">
        <p>{user.first_name} sup</p>
      </div>
    )
  }
});
