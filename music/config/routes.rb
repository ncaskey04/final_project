Rails.application.routes.draw do

  get 'articles/index'
  root 'articles#index'

  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  # resources :sites
  # match "*path", to: "sites#index", via: "get"
  # root 'sites#index'

end
