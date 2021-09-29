Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'things', to: 'things#index'
    get 'products', to: 'products#index'
    get 'avg_price', to: 'products#avg_price'
    get 'avg_products', to: 'products#avg_products'
    get 'sellers', to: 'products#sellers'
    get 'sellers/:seller', to: 'products#seller'
    get 'categories/:category', to: 'products#category'
  end
  
end
