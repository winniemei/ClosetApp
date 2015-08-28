Rails.application.routes.draw do
root to: 'application#index'
 resources :outfits, only: [:create, :update, :index, :destroy]

end
