Rails.application.routes.draw do
  resources :users, except: [:index]
  resources :data, only: [:show, :create, :index]
  resources :students
  

  # post '/login', to: 'sessions#create'
  # get '/userinsession', to: 'application#get_logged_in_user'
  #404 ERROR

  get '/user_in_session', to: 'sessions#get_logged_in_user'
  #NULL ERROR

  get '/login', to:'application#login'
# CHECK YOUR PASSWORD ERROR IN POSTMAN

  # post '/register', to: 'sessions#create'
  # post '/register', to: 'application#create'
  #500 ERROR


  
  delete '/logout', to:'sessions#destroy'
#EMPTY ARRAY

#Qs: How do i know which controller to put routes? why wont the routes work when i try to go to them, what am i doing wrong in react? 





# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
