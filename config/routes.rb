Rails.application.routes.draw do

  resources :users do
    collection do
      post :confirm
    end
    resources :leaders, only: [:index]
    resources :followers, only: [:index]
  end
  
  resources :sessions, only: [:new, :create, :destroy]
  
  resources :relationships, only: [:create, :destroy]
  
end
