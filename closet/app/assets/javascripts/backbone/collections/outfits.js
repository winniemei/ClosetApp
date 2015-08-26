App.Collections.Outfits = Backbone.Collection.extend({
  url: '/outfits',
  model: App.Models.Outfit,
  initialize: function () {
    console.log('New outfit collection created')
  }
})