class SessionsController < ApplicationController
  include ActionController::Cookies
  skip_before_action :authorize_user, only: [:create, :logout]

    def logout
      session.delete(:user_id)
      render json: {}
    end

    def create
      user_to_find_to_login = User.find_by(username:params[:username])

      if user_to_find_to_login && user_to_find_to_login.authenticate(params[:password])
        session[:user_id] = user_to_find_to_login.id #this is the one fucking line i needed to make to remember if some is logged in
          render json: user_to_find_to_login, status: :ok
      else
        debugger
      render json: {errors: 'Invalid Password or Username'}, status: :unauthorized 

      # cookies[:user_id] = { value: user.id, expires: 1.year.from_now }
      end
      
    end
  
    def get_logged_in_user
        user_already_loggedin = User.find_by(id: session[:user_id])
        render json: user_already_loggedin
    end
     
    
    # def destroy
    #   debugger
    #     session.delete(:user_id)
    #     render json: {}
    # end



    

    def index
      session[:session_hello] ||= "World"
      cookies[:cookies_hello] ||= "World"
      render json: { session: session, cookies: cookies.to_hash }
    end





end

  

  


 #     user_to_find_to_login= User.find_by(username: params[:username])
    #     # if user_to_find_to_login

    #         if user_to_find_to_login.authenticate(params[:password])

    #             session[:user_id]=user_to_find_to_login.id
                
    #         render json: user_to_find_to_login, status: :ok

    #         cookies[:user_id] = { value: user.id, expires: 1.year.from_now }
    #     else
    #   # Return an error message if the login credentials are invalid
    #         render json: { errors: 'Invalid username or password' }, status: :unauthorized
    #     end
    #   end
    # end
  
    
    # def login
    #     byebug
    #     user = User.find_by(username:params[:username])
    
    #     if user&.authenticate(params[:password])
    
    #     render json: user, status: :ok
    #     else 
    #       render json: {errors: 'Invalid Password or Username'}, status: :unauthorized
    #     end
    # end

      #   user = User.find_by(id: params[:id])
      #   #Deletes the cookie for the seassion
      #   cookies.delete :user_id
      #   head :ok
      # end

       #  def get_logged_in_user
    #     session[:count]=(sessio[:count] || 0) +1
    #     render json: {count:session[:count]}
    #  end