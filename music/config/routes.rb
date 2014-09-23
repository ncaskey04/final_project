Rails.application.routes.draw do

  get 'articles/index'
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  root 'sites#index'
  # resources :sites
  # match "*path", to: "sites#index", via: "get"
  # root 'sites#index'

end
