class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.string :year
      t.string :artist
      t.integer :popularity
      t.string :release_date
      t.string :genre
      t.string :url
      t.string :available_markets

      t.timestamps
    end
  end
end
