class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_id
      t.string :display_name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end