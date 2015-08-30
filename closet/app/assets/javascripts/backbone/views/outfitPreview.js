App.Views.OutfitPreview = Backbone.View.extend({
	initialize: function(){
		console.log("Outfit preview created");
		this.template = HandlebarsTemplates['preview'];
		this.render();
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'remove', this.remove)
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	showOutfitView: function(){
		App.outfitView.setOutfit(this.model);
	},
	destroyOutfit: function(){
		this.model.destroy();
	},
	events: {
		'click p': 'showOutfitView',
		'click span.delete': 'destroyOutfit'
	}
})