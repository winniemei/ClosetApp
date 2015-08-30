class OutfitsController < ApplicationController

	def index
		@outfits = Outfits.all
		render json: @outfits
	end

	def create
		@outfits.create(outfit_params)
	end

	def update
		@outfit = Outfit.find(params[:id])
		@outfit.update(outfit_params)
	end

	def destroy
		@outfit = Outfit.find(params[:id])
		@outfit.destroy
	end

	private

	def outfit_params
		params.require(:outfit).permit(:outfitname)
	end

end