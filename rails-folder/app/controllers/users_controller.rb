class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  def new
    user = User.new(user_params)
  end

  def create
    user = User.new(user_params)

    if user.save
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, current_user: {user_id: user.id, user_name: user.name.capitalize!}}
    else
      render json: {error: "user is not unique"}, status: 404
    end
  end

  def show
    user = User.find(params[:id])

    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def update
  end

  def delete
  end

  private

  def user_params
    params.require(:auth).permit(:name, :email, :password)
  end
end
