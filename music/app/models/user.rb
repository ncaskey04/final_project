class User < ActiveRecord::Base
  has_many :albums

  validates :name,
            :presence => true,
            :uniqueness => true

  validates :provider,
            :presence => true

  validates :uid, 
            :presence => true,
            :uniqueness => true

  def self.authenticate email, password
    User.find_by_email(email).try(:authenticate,password)
  end

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.picURL = auth["extra"]["raw_info"]["images"][0]["url"]
      user.token = auth["credentials"]["token"]
      user.refresh_token = auth["credentials"]["refresh_token"]
    end
  end

end