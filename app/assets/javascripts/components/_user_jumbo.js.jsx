var UserJumbo = React.createClass({
  render: function() {
    return (
      <div>
          <section id="block-block-95" className="block block-block block-background block-block-95 block-layout-contained      clearfix" >
            <div className="container">
              <div className="block-title-container">
              </div>
              <div className="block-content-container">
                <div className="block-content-holder">
                  <div className="block-content show-title">
                    <center>
                      <h1>{this.props.user.first_name} { this.props.user.last_name }</h1>
                      <div className="row">
                        <div className="col s6 title">{this.props.user.title}</div>
                        <div className="col s6 title btn transparent resume-btn">resume</div>
                      </div>
                    </center>

                    <div className="user-show-picture"></div>
                  </div>
                  <div className="block-quickedit-padding block-quickedit-padding-left" title="Drag to adjust left & right padding" data-quickedit-axis="x" data-quickedit-direction="left" />
                  <div className="block-quickedit-padding block-quickedit-padding-right" title="Drag to adjust left & right padding" data-quickedit-axis="x" data-quickedit-direction="right" />
                </div>
              </div>
            </div>
            <div className="block-quickedit-padding block-quickedit-padding-top" title="Drag to adjust top padding" data-quickedit-axis="y" data-quickedit-direction="top" />
            <div className="block-quickedit-padding block-quickedit-padding-bottom" title="Drag to adjust bottom padding" data-quickedit-axis="y" data-quickedit-direction="bottom" />
          </section>
        </div>
    );
  }
});
