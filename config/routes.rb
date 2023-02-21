Rails.application.routes.draw do
  resources :needs
  resources :wants, only: [:index, :create]
  resources :spendings

  #handles user signing up:
  post '/signup', to: 'users#create'
  #handles login for existing user in the database:
  post "/login", to: "users#login"
  #handles automatic login once a user is able to successfully sign up/login:
  get "/me", to: "users#show"
  #this route can only be accessed if a user is authorized:
  # get "/user_is_authed", to: "auth#user_is_authed"
  post '/logout', to: 'users#logout'
 
  get '/wants/:user_id', to: 'wants#index'
  # get "/userspendings", to: "spendings#user_spendings"
  #since Rails is handling the routing logic, it will look for routes defined in the config/routes.rb file to determine how to handle all requests
  #We can solve this problem by setting up a custom route in our Rails application, and handle any requests that come through that aren't requests for our API routes by returning the public/index.html file instead.
  #the method below handles all other GET requests by sending
  #them to a special FallbackController with an index action:
  
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  # Defines the root path route ("/")
  root "users#index"
  # get '/users', to: 'users#index'
  # get '/hello', to: 'application#hello_world'
end
#all the routes for our api are defined FIRST in the routes.rb file. 
