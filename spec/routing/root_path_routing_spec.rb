require "rails_helper"

RSpec.describe "Route for Root Path", :type => :routing do
  it "route / to the root redirects to the alumni path" do
    expect(:get => "/").not_to be_routable
    expect(:get => "/alumni").to route_to(:controller => "users", :action => "index")
  end
end