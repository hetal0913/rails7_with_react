class Api::V1::QuestionsController < ApplicationController
    before_action :get_question, only: [:update_counter]

    def index
        @questions = Question.all
        render json: @questions, status: :ok
    end

    def update_counter
        puts "::::::::::#{params}"
        raise InvalidParamError and return unless params[:count_for].present?
        if params[:count_for] == "like"
            @question.update(like_count: @question.like_count + 1)
        elsif params[:count_for] == "dislike"
            @question.update(dislike_count: @question.dislike_count + 1)
        end
        render json: @question, status: :ok
    end

    private

    def get_question
        @question = Question.where(id: params[:id]).first
        raise NotFoundError and return unless @question.present?
    end
  end