# Handle not authorized error
class NotAuthorizedError < StandardError ; end
# Handle not found error
class NotFoundError < StandardError ; end
# Handle not valid error
class InvalidParamError < StandardError ; end

class ApplicationController < ActionController::Base
    include ApplicationHelper
    protect_from_forgery prepend: true
    rescue_from NotAuthorizedError, :with => :render_not_authorized
    rescue_from NotFoundError, :with => :render_404
    rescue_from InvalidParamError, :with => :render_400

    def render_not_authorized
        render_response(401, "error", "You are not authorized to access data") and return
    end

    def render_404
        render_response(404, "error", "Invalid or Missing parameters") and return
    end

    def render_400
        render_response(400, "error", "Invalid or Missing parameters") and return
    end

    def render_response(status, status_state,  message="", data="")
        response = {
          status: status,
          statusState: status_state,
          message: message,
          data: data,
        }
        compact(response)
        render json: response.to_json
    end
end
