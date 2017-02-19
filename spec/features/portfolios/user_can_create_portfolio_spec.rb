require 'rails_helper'

RSpec.describe Portfolio do
  context 'as a new logged in user', :js do

    def search_react_select_for(text)
      find(".Select").trigger("click")

      fix_overlap = %{ $('.Select-placeholder').css('z-index', -99999) }
      page.execute_script(fix_overlap)

      find(".Select .Select-input input").native.send_keys(text)
    end

    def click_autosuggest_option(node_type, text)
      find(node_type, text: text, visible: :all, match: :first).click
    end

    it "can create a new portfolio"do

      user = create(:user)
      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit dashboard_path

      click_link 'Create Profile'
      sleep(30)
      expect(current_path).to eq(user_portfolio_new_path(user.id))

      fill_in 'name', with: "Jimmy"
      fill_in 'title', with: "Software developer"
      fill_in 'bio', with: "I like cars"
      fill_in 'github', with: "www.github.com"
      fill_in 'linkedin', with: "www.linkedin.com"
      fill_in 'email', with: "example@example.com"

      # search_react_select_for("Jimmy")
      click_autosuggest_option(".portfolio-new-submit", "Save Profile")

      # find('#portfolio-new-submit',:visible => false).click
      expect(current_path).to eq(dashboard_path)
    end
  end
end
