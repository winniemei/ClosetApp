App.Views.PreviewView = Backbone.View.extend({
  initialize: function () {
    console.log("Preview view created");
    this.template = HandlebarsTemplates['preview'];
    this.render();
    this.listenTo(this.model, 'change', this.render)
    this.listenTo(this.model, 'remove', this.remove)
  }, 
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  },
  showOutfitView: function () {
    console.log(this.model)
    App.outfitView.setOutfit(this.model);
  },
  destroyOutfit: function () {
    this.model.destroy();
  },
  events: {
    'click p': 'showOutfitView',
    'click span.delete': 'destroyOutfit'
  }
})