Rails.application.routes.draw do
  resources :users
  resources :sites
  match "*path", to: "sites#index", via: "get"
  root 'sites#index'
end
