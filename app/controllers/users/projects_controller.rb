class Users::ProjectsController < ApplicationController

  def new
    @user = current_user
  end

  def edit
    @project = Project.find(params[:project])
  end

  def update
    @project = Project.find(params[:project][:id])
    if (@project.update(project_params))
      render js: "/dashboard"
    end
  end

  def create


    user = User.find(params[:user_id])
    portfolio = User.find(params[:user_id]).portfolio
    new_project = portfolio.projects.new(project_params)

    image = Paperclip.io_adapters.for(params[:project][:avatar])
    image.original_filename = portfolio.user.slug
    new_project.update(avatar: image, user: user)

    # new_project = portfolio.projects.new(project_params)

    # new_project.update(user_id: params[:user_id])


    if(new_project.save)
      render js: "/dashboard"
    else
      render component: 'ProjectForm', props: { user: current_user}
    end
  end

  def destroy
    @project = Project.find(params[:project])
    if @project.delete
      render js: "/dashboard"
    else
      render js: "/dashboard"
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :github, :production_url, :screenshot, :description, :areas_of_focus )
  end
end
