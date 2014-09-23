class UsersController < SpotifyController
  def create
    user_params = params.require(:user).permit(:email, :password);
    puts "PARAMS COMING IN"
    puts user_params
    User.create(user_params)

  end

  def show
  end
end