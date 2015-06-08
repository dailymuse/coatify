(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
[
	(function() {
		if(true) {
			return (coat.m("ul", {}, coat.map(controller.users, function(user, key) {
				return (coat.m("li", {}, user));
			})));
		} else if(false) {
			return (" should never show ");
		} 
	}).call(this),
	coat.trust("&nbsp"),
	coat.trust("'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'"),
	(function() {
		view._template = true;
		var template = require("./foo.coat")(view, state);
		view._template = false;
		return template;
	}).call(this),
	(function() {
		var newView = new view.ButtonView({state: state.subModel});
		view._addSubview(newView)
		return newView.render();
	}).call(this)
]
},{"./foo.coat":2}],2:[function(require,module,exports){
coat.m("h1", {}, "Hello World")
},{}]},{},[1]);
