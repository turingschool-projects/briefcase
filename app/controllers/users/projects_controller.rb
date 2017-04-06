class Users::ProjectsController < ApplicationController

  def new
    @user = current_user
  end

  def edit
    @project = Project.find(params[:project])
  end

  def update
    project = Project.find(params[:project][:id])
    if (project.update(project_params))
      update_avatar(project) if params[:project][:avatar]
      render js: "/dashboard"
    end
  end

  def create
    user = User.find(params[:user_id])
    portfolio = User.find(params[:user_id]).portfolio
    new_project = portfolio.projects.new(project_params)
    new_project.user_id = user.id
    if(new_project.save)
      update_avatar(new_project) if params[:project][:avatar]
      render js: "/dashboard"
    else
      redirect_to new_user_project_path(current_user), status: 400
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
    params.require(:project).permit(:name, :github, :production_url, :screenshot, :description, :areas_of_focus, :published )
  end

  def update_avatar(project)
    image = Paperclip.io_adapters.for(params[:project][:avatar])
    image.original_filename = project.user.slug
    project.update(avatar: image)
  end
end
