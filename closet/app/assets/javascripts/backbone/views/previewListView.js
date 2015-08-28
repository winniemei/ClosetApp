App.Views.PreviewListView = Backbone.View.extend({
  el: "#preview-list-view",
  initialize: function () {
    console.log("Outfit list view made");
    this.listenTo(this.collection, 'reset', this.renderAllPreviews);
    this.listenTo(this.collection, 'add', this.renderOutfitPreview);
  }, 
  renderAllPreviews: function () {
    this.collection.each(this.renderOutfitPreview, this);
  },
  renderOutfitPreview: function (outfit) {
    var outfitView = new App.Views.PreviewView({ model: outfit});
    this.$el.append(outfitView.$el);
  }
})