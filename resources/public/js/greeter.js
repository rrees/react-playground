console.log("Hello world");

var Hello = React.createClass({
	render:function () {
	  return React.DOM.h1({}, 'Hello from React!');
	}
});

var el = React.createElement(Hello);
React.render(el, document.getElementById('headline'));