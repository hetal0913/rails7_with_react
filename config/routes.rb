Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "hello#world"

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create] do
        member do
          put :update_counter
        end
      end
    end
  end

end
