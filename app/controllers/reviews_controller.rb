class ReviewsController < ApplicationController
  # def new
  #   @list = current_list
  #   @review = Review.new
  # end

  def create
    @review = Review.new(review_params)
    @list = List.find(params[:list_id])
    @review.list = @list
    if @review.save
      redirect_to list_path(@list)
    else
      render 'list/show'
    end
  end

  def destroy
    @review = Review.find(params{:id})
    @review.destroy
    redirect_to list_path(@review.list)
  end

  def review_params
    params.require(:review).permit(:comment, :rating)
  end
end
