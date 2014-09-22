class UsersController < SpotifyController
  def create
    user_params = params.require(:user).permit(:email, :password);
    puts "PARAMS COMING IN"
    puts user_params
    User.create(user_params)

  end

  def show
    @user_id = params[:id]
    @body = get_user_profile(@user_id)
    @playlists = get_user_playlists(@user_id)
    if @user_id == session[:current_user]
      @tracks = get_user_tracks
    end
  end
end