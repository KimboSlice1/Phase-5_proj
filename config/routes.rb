Rails.application.routes.draw do
  resources :users, except: [:index]
  resources :data
  resources :students

  post '/login', to: 'sessions#create'
get '/userinsession', to: 'sessions#get_logged_in_user'
  
delete '/logout', to:'sessions#destroy'
# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
