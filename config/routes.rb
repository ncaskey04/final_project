Rails.application.routes.draw do

  get 'articles/index'

  get '/login', :to => 'sessions#new', :as => :login
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  root 'sites#index'

  get "/get_info", to: "spotify#get_info"

  # resources :users
  resources :sites
  # match "*path", to: "sites#index", via: "get"
  # root 'sites#index'

end
