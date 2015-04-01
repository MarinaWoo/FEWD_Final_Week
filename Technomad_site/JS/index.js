function removeActive() {
  $('#navigation a').removeClass('active');
};

var waypoint2 = new Waypoint({
  element: document.getElementById('tech'),
  handler: function(direction) {
  	removeActive();
    $('#tech-link').addClass('active');
  },
  offset: 100
})

var waypoint3 = new Waypoint({
  element: document.getElementById('apps'),
  handler: function(direction) {
  	removeActive();
    $('#apps-link').addClass('active');
  },
  offset: 50 
})

var waypoint4 = new Waypoint({
  element: document.getElementById('commonSense'),
  handler: function(direction) {
  	removeActive();
    $('#commonSense-link').addClass('active');
  },
  offset: 50 
})

var waypoint5 = new Waypoint({
  element: document.getElementById('banking'),
  handler: function(direction) {
  	removeActive();
    $('#banking-link').addClass('active');
  },
  offset: 50 
})

var waypoint6 = new Waypoint({
  element: document.getElementById('safety'),
  handler: function(direction) {
  	removeActive();
    $('#safety-link').addClass('active');
  },
  offset: 50 
})

var waypoint7 = new Waypoint({
  element: document.getElementById('inTransit'),
  handler: function(direction) {
  	removeActive();
    $('#inTransit-link').addClass('active');
  },
  offset: 50 
})

var waypoint8 = new Waypoint({
  element: document.getElementById('packing'),
  handler: function(direction) {
  	removeActive();
    $('#packing-link').addClass('active');
  },
  offset: 50 
})

var waypoint9 = new Waypoint({
  element: document.getElementById('winningGear'),
  handler: function(direction) {
  	removeActive();
    $('#winningGear-link').addClass('active');
  },
  offset: 50 
})

var waypoint10 = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    removeActive();
    $('#about-link').addClass('about');
  },
  offset: 50 
})