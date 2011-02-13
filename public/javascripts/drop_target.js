var DropTarget = Backbone.View.extend({
  events : {
    "dragenter" : "dragEnter",
    "dragover"  : "dragOver",
    "dragleave" : "dragLeave",
    "drop"      : "drop"
  },

  initialize : function ( options ) {
    this.hoverTarget = this.$("#hover_target");
  },

  dragEnter : function ( event ) {
    event.preventDefault();
    this.hoverTarget.fadeIn();
  },

  dragOver : function ( event ) {
    event.preventDefault();
  },

  dragLeave : function ( event ) {
    event.preventDefault();

    if (!this.isInside(event)) {
      this.hoverTarget.fadeOut();
    }
  },

  drop : function ( event ) {
    event.preventDefault();
    this.trigger("drop", event.originalEvent.dataTransfer);
  },
 
  isInside : function ( event ) {
    var top    = this.el.offset().top;
    var left   = this.el.offset().left;
    var right  = left + this.el.outerWidth();
    var bottom = top + this.el.outerHeight();

    if ((event.pageX > right) || (event.pageX < left)) {
      return false;
    }

    if ((event.pageY >= bottom) || (event.pageY <= top)) {
      return false;
    }

    return true;
  } 
});
