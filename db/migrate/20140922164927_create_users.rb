class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_id
      t.string :name
      t.string :email
      t.string :provider
      t.string :uid
      t.string :picURL
      t.string :token
      t.string :refresh_token

      t.timestamps
    end
  end
end
