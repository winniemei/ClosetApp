class CreateOutfits < ActiveRecord::Migration
  def change
    create_table :outfits do |t|
      t.string :outfit_name
      t.string :image
      t.string :description
      t.integer :price
    end
  end
end
