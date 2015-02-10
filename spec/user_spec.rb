require 'spec_helper'

describe User do
  before :each do
    @user = User.new("user_id", "name", "email")
  end

  describe "#new" do
    it "takes three parameters and returns a User object" do
      expect(@user).to be_an_instance_of User
    end
  end

  describe "#user_id" do
    it "returns the correct user_id" do
      expect(@user.user_id).to eq "user_id"
    end
  end

  describe "#name" do
    it "returns the correct name" do
      expect(@user.name).to eq "name"
    end

  end

  describe "#email" do
    it "returns the correct email" do
      expect(@user.email).to eq "email"
    end
  end

end