Rails.application.routes.draw do
  get 'sessions/new'

  resources :users do
    collection do
      post :confirm
    end
  end
  
  resources :sessions, only: [:new, :create, :destroy]
  
end
