Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show] do
      resources :photos, only: [:index, :create]
      resources :albums, only: [:index, :create]
    end
    resource :sessions, only: [:create, :destroy, :show]

    resources :photos, only: [:update, :show, :destroy]
    resources :albums, only: [:show, :update, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
