class User < ActiveRecord::Base
  has_many :albums

  def self.authenticate email, password
    User.find_by_email(email).try(:authenticate,password)
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