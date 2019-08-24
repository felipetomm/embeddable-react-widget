(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{269:function(module,exports,__webpack_require__){__webpack_require__(270),__webpack_require__(373),module.exports=__webpack_require__(374)},374:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(32),__webpack_require__(28),__webpack_require__(27),__webpack_require__(33),__webpack_require__(34);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(107),req=__webpack_require__(590);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(375)(module))},590:function(module,exports,__webpack_require__){var map={"./index.stories.js":599};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=590},595:function(module,exports,__webpack_require__){var content=__webpack_require__(596);"string"==typeof content&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};__webpack_require__(598)(content,options);content.locals&&(module.exports=content.locals)},596:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(597)(!1)).push([module.i,"@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    display: inherit;\n    visibility: visible; }\n  to {\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0); }\n  to {\n    display: none;\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0); } }\n\n.docked-widget {\n  position: fixed;\n  bottom: 0px;\n  right: 10px;\n  width: 200px;\n  z-index: 9999; }\n\n.dock {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  width: 180px;\n  border: 1px solid grey;\n  background: white; }\n\n.widget {\n  width: 200px;\n  border: 1px solid grey;\n  border-bottom: none;\n  animation-duration: 0.2s;\n  animation-fill-mode: forwards; }\n  .widget-entering {\n    animation-name: slideInUp; }\n  .widget-entered {\n    display: inherit;\n    visibility: visible; }\n  .widget-exiting {\n    animation-name: slideOutDown; }\n  .widget-exited {\n    display: none;\n    visibility: hidden; }\n  .widget-header {\n    height: 30px;\n    line-height: 30px;\n    background: lightgrey;\n    color: grey;\n    padding-left: 10px;\n    display: flex;\n    align-items: stretch; }\n    .widget-header-title {\n      display: flex;\n      flex-grow: 1; }\n    .widget-header-icon {\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: .75rem; }\n  .widget-body {\n    background: white;\n    padding: 10px;\n    height: 150px; }\n  .widget-footer {\n    background: green;\n    line-height: 30px;\n    padding-left: 10px; }\n",""])},599:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(2),react_default=__webpack_require__.n(react),client=__webpack_require__(107),classCallCheck=(__webpack_require__(23),__webpack_require__(264)),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__(265),createClass_default=__webpack_require__.n(createClass),possibleConstructorReturn=__webpack_require__(266),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(267),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),assertThisInitialized=__webpack_require__(52),assertThisInitialized_default=__webpack_require__.n(assertThisInitialized),inherits=__webpack_require__(268),inherits_default=__webpack_require__.n(inherits),defineProperty=__webpack_require__(73),defineProperty_default=__webpack_require__.n(defineProperty),prop_types=__webpack_require__(72),prop_types_default=__webpack_require__.n(prop_types),Transition=__webpack_require__(603),widget_Widget=(__webpack_require__(595),function(_Component){function Widget(){var _getPrototypeOf2,_this;classCallCheck_default()(this,Widget);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=possibleConstructorReturn_default()(this,(_getPrototypeOf2=getPrototypeOf_default()(Widget)).call.apply(_getPrototypeOf2,[this].concat(args))),defineProperty_default()(assertThisInitialized_default()(_this),"state",{opened:!1,showDock:!0}),defineProperty_default()(assertThisInitialized_default()(_this),"handleToggleOpen",function(){_this.setState(function(prev){var showDock=prev.showDock;return prev.opened||(showDock=!1),{showDock:showDock,opened:!prev.opened}})}),defineProperty_default()(assertThisInitialized_default()(_this),"handleWidgetExit",function(){_this.setState({showDock:!0})}),defineProperty_default()(assertThisInitialized_default()(_this),"renderBody",function(){return _this.state.showDock?react_default.a.createElement("button",{type:"button",className:"dock",onClick:_this.handleToggleOpen,onKeyPress:_this.handleToggleOpen},"^ OPEN ^"):""}),_this}return inherits_default()(Widget,_Component),createClass_default()(Widget,[{key:"render",value:function render(){var _this2=this,opened=this.state.opened,body=this.renderBody(),_this$props=this.props,bodyText=_this$props.bodyText,headerText=_this$props.headerText,footerText=_this$props.footerText,_ref=react_default.a.createElement("div",{className:"widget-header-title"},headerText),_ref2=react_default.a.createElement("div",{className:"widget-body"},bodyText),_ref3=react_default.a.createElement("div",{className:"widget-footer"},footerText);return react_default.a.createElement("div",{className:"docked-widget"},react_default.a.createElement(Transition.a,{in:opened,timeout:250,onExited:this.handleWidgetExit},function(status){return react_default.a.createElement("div",{className:"widget widget-".concat(status)},react_default.a.createElement("div",{className:"widget-header"},_ref,react_default.a.createElement("button",{type:"button",className:"widget-header-icon",onClick:_this2.handleToggleOpen,onKeyPress:_this2.handleToggleOpen},"X")),_ref2,_ref3)}),body)}}]),Widget}(react.Component));widget_Widget.displayName="Widget",widget_Widget.propTypes={headerText:prop_types_default.a.string,bodyText:prop_types_default.a.string,footerText:prop_types_default.a.string},widget_Widget.defaultProps={headerText:"Header",bodyText:"Body",footerText:"Footer"};var components_widget=widget_Widget;widget_Widget.__docgenInfo={description:"",methods:[{name:"handleToggleOpen",docblock:null,modifiers:[],params:[],returns:null},{name:"handleWidgetExit",docblock:null,modifiers:[],params:[],returns:null},{name:"renderBody",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Widget",props:{headerText:{defaultValue:{value:"'Header'",computed:!1},type:{name:"string"},required:!1,description:""},bodyText:{defaultValue:{value:"'Body'",computed:!1},type:{name:"string"},required:!1,description:""},footerText:{defaultValue:{value:"'Footer'",computed:!1},type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/widget.js"]={name:"Widget",docgenInfo:widget_Widget.__docgenInfo,path:"src/components/widget.js"});var index_stories_ref=react_default.a.createElement(components_widget,null);Object(client.storiesOf)("Widget").add("default",function(){return index_stories_ref})}},[[269,1,2]]]);
//# sourceMappingURL=main.1074b718670d46960b6e.bundle.js.map