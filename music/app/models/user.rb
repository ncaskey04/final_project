class User < ActiveRecord::Base
  has_many :albums

  def spotify
  end

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.picURL = auth["extra"]["raw_info"]["images"][0]["url"]
    end
  end

end