
console.log('Hello word counter');

var Editor = React.createClass({
	render: function() {
		return React.DOM.div({},
			React.DOM.textarea(),
			React.createElement(Count)
			);
	}
});

var Count = React.createClass({
	render: function() {
		return React.DOM.div({}, 0);
	}
});

React.render(React.createElement(Editor), document.getElementById('editor'));