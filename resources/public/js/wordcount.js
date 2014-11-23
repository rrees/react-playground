
var Editor = React.createClass({
	render: function() {
		var text = this.state.text;
		var wordcount = text ? text.match(/\w+/g).length : 0;

		return React.DOM.div({},
			React.DOM.textarea({onChange: this.handleChange}),
			React.createElement(Count, {count: wordcount})
			);
	},
	getInitialState: function() {
		return {text: ''};
	},
	handleChange: function (event) {
		this.setState({text: event.target.value});
	}
});

var Count = React.createClass({
	render: function() {
		return React.DOM.div({}, this.props.count);
	},
	getDefaultProps: function() {
		return {count: 0};
	}
});

React.render(React.createElement(Editor), document.getElementById('editor'));