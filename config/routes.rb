Rails.application.routes.draw do

  resources :users do
    collection do
      post :confirm
    end
    
    resources :leaders, only: [:index]
    resources :followers, only: [:index]
    
    resources :users_conversations, only: [:create, :index, :show] do
      resources :users_messages, only: [:create]
    end
  end
  
  resources :sessions, only: [:new, :create, :destroy]
  
  resources :relationships, only: [:create, :destroy]
  
  resources :teams do
    collection do
      post :confirm
    end
  end
  
  root :to => 'tops#index'
  
end
