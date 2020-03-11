webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_EditPizza_EditPizza__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EditPizza/EditPizza */ "./src/components/EditPizza/EditPizza.tsx");
/* harmony import */ var _components_Account_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Account/Account */ "./src/components/Account/Account.tsx");
/* harmony import */ var _components_Orders_Orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Orders/Orders */ "./src/components/Orders/Orders.tsx");
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Home/Home */ "./src/components/Home/Home.tsx");
/* harmony import */ var _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/actions/pizza.actions */ "./src/store/actions/pizza.actions.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Cart/Cart */ "./src/components/Cart/Cart.tsx");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();













var App = function (_super) {
  __extends(App, _super);

  function App() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  App.prototype.componentDidMount = function () {
    this.props.fetchPizzaRecipes();
  };

  App.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Global__Container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: '/menu',
      component: _components_Home_Home__WEBPACK_IMPORTED_MODULE_7__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: '/account',
      component: _components_Account_Account__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: '/edit/:id',
      component: _components_EditPizza_EditPizza__WEBPACK_IMPORTED_MODULE_4__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: '/orders',
      component: _components_Orders_Orders__WEBPACK_IMPORTED_MODULE_6__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: '/cart',
      component: _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_10__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      exact: true,
      from: "/",
      to: "/menu"
    })));
  };

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(_store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_8__["mapStateToProps"], _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_8__["mapDispatchToProps"])(App));

/***/ })

})
//# sourceMappingURL=main.a5e0aef0bb1bfee98072.hot-update.js.map