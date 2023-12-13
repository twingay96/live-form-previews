Rails.application.routes.draw do
  resources :tasks do
    collection do
      post :preview  # preview_tasks_path
    end
  end
  root "tasks#index"
 
end
