class Api::V1::QuestionsController < ApplicationController
    before_action :get_question, only: [:update_counter]

    def index
        if params[:tag].present? && params[:tag] != 'All'
            @questions = Question.filter_tags(params[:tag])
        else
            @questions = Question.all
        end
        render json: @questions, status: :ok
    end

    def create
        # if validate_params("question", :title, :tag)
            @question = Question.new(question_params)
            if @question.save
                render json: {data: @question, message: "Question added successfully", status: "success"}, status: :ok
            else
                render json: {data: @question.errors.full_messages, message: "Invalid or missing parameters", status: "error"}, status: :unprocessable_entity
            end
        # end
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

    def question_params
        params.require(:question).permit(:title, :tag)
    end
  end