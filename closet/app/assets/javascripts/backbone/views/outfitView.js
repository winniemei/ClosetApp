App.Views.OutfitView = Backbone.View.extend({
  el: "#outfit-view",
  initialize: function () {
    console.log("Single outfit view created");
    this.newTemplate = HandlebarsTemplates['new'];
    this.showTemplate = HandlebarsTemplates['show'];
    this.editTemplate = HandlebarsTemplates['edit'];
    this.renderNewForm();
  },
  setOutfit: function (outfit) {
    this.model = outfit;
    this.render();
  }, 
  render: function () {
    this.$el.html(this.showTemplate(this.model.toJSON()));
  },
  renderNewForm: function () {
    this.$el.html(this.newTemplate());
  },
  createOutfit: function () {
    App.outfits.create({
      outfit_name: this.$('#outfit_name').val(),
      image: this.$('#image').val(),
      description: this.$('#description').val(),
      price: this.$('#price').val()
    });
    this.setOutfit(App.outfits.last());
  }, 
  destroyOutfit: function () {
    this.model.destroy();
    this.renderNewForm();
  }, 
  updateOutfit: function () {
    this.model.save({
      outfit_name: this.$('#outfit_name').val(),
      image: this.$('#image').val(),
      description: this.$('#description').val(),
      price: this.$('#price').val()
    });
    this.render();
  }, 
  renderEditForm: function () {
    this.$el.html(this.editTemplate(this.model.toJSON()));
  }, 
  events: {
    'click .delete': 'destroyOutfit',
    'click .edit': 'renderEditForm',
    'click .update': 'updateOutfit',
    'click .new': 'renderNewForm',
    'click .create': 'createOutfit' 
  }
})