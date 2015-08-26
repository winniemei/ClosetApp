// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .
var App = {
	Models: {}, 
	Collections: {}, 
	Views: {}, 
	Routers: {}
};

$(function() {
  $('#new-outfit-form').on('click', '#submit', createOutfit);
  $('#outfit-collection-view').on('click', '.delete', deleteOutfit);
    App.outfits = new App.Collections.Outfits();
 	App.outfits.fetch({
    reset: true,
    success: renderAllOutfits
  });
});

var createOutfit = function() {
  var data = {
    outfit: $('[name="outfit"]').val(),
    size: $('[name="size"]').val(),
    image: $('[name="image"]').val()
  };

  var newOutfit = App.outfits.create(data);
  renderOutfit(newOutfit);
  $('input').val('');
};

var renderOutfit = function(model) {
  var outfitsContainer = $('#outfit-collection-view')
  var outfit = model.get('outfit');
//   var content = model.get('content');
//   var votes = model.get('upvote');
//   var iD = model.get('id');

//   var newTweed = $('<div>').addClass('tweed')
//     .attr('id', iD);
//   var tweedContent = $('<p>').text(content)
//     .addClass('content');
//   var tweedAuthor = $('<p>').text(author)
//     .addClass('author');
//   var votes = $('<div>').addClass('vote')
//     .append($('<span>').text(' - ').addClass('vote-button').attr('data-value', -1))
//     .append($('<span>').text(votes).addClass('votes'))
//     .append($('<span>').text(' + ').addClass('vote-button').attr('data-value', 1));

//   var deleteSpan = $('<p>').text('delete')
//     .addClass('delete')
//     .attr('data-id', iD);

//   newTweed.append(tweedContent)
//     .append(tweedAuthor)
//     .append(votes)
//     .append(deleteSpan)
//     .appendTo(tweedsContainer);

// };




var renderAllOutfits = function() {
  App.outfits.fetch();
  App.outfits.each(renderOutfit);
};

var deleteOutfit = function() {
  var modelID = $(this).attr('data-id');
  var model = App.outfits.get(modelID);
  model.destroy();
  $(this).closest('.outfit').remove();
};





















