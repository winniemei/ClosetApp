class OutfitsController < ApplicationController

	def index
		@outfits = Outfit.all
		render json: @outfits
	end

	def create
		@outfit = Outfit.create(outfit_params)
		render json: @outfit
	end

	def update
		@outfit = Outfit.update(outfit_params)
	end

	def destroy
		@oufit = Outfit.find(params[:id])
		@oufit.destroy();
	end

	private

	def outfit_params
		params.require(:outfit).permit(:outfit_name, :image, :description, :price)
	end



end