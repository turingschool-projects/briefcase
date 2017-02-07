class UsersController < ApplicationController
  def index

    @users = User.all
    if(logged_in?)
      render component: 'Main', props: { users: @users, signed_in: 1 }
    else
      render component: 'Main', props: { users: @users, signed_in: 0 }
    end
  end

  def show
    @user = User.find_by_sql("SELECT * FROM users
                              WHERE REPLACE(lower(first_name), ' ', '') LIKE '%#{first_name_from_slug}%'
                              AND REPLACE(lower(last_name), ' ', '') LIKE '%#{last_name_from_slug}%'
                              LIMIT 1").first
    render component: "Show", props: { user: @user, projects: @user.projects }
  end

  def edit
    @user = User.find_by_sql("SELECT * FROM users
                              WHERE REPLACE(lower(first_name), ' ', '') LIKE '%#{first_name_from_slug}%'
                              AND REPLACE(lower(last_name), ' ', '') LIKE '%#{last_name_from_slug}%'
                              LIMIT 1").first
    render component: "Edit", props: { user: @user }
  end

  def account
    render component: 'Account'
  end

  private
    def first_name_from_slug
      params[:slug].split('-')[0]
    end

    def last_name_from_slug
      params[:slug].split('-')[-1]
    end
end
