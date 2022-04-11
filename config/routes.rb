Rails.application.routes.draw do

  namespace :api do
    resources :products
    get '/braintree_token', to: 'braintrees#token'
    post '/payment', to: 'braintrees#payment'
  end

end

