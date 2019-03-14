(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper d-flex flex-column align-items-center w-100\">\n  <h1 class=\"title\">todos</h1>\n  <div class=\"row justify-content-center w-100\">\n    <div class=\"todo-wrapper p-0 d-flex flex-column col-md-6 col-sm-8\">\n      <app-header></app-header>\n      <app-todo-list></app-todo-list>\n      <app-footer></app-footer> <!-- *ngIf=\"hasTodos$ | async\"-->\n    </div>\n  </div>\n  <small class=\"instruction text-center\">\n    <em>Press enter add new todo. Press Arrow icon to toggle todos.</em>\n    <br><br>\n    copyright todosMVC Project\n  </small>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper .title {\n  color: rgba(175, 47, 47, 0.15);\n  font-size: 120px;\n  padding: 30px 0;\n  font-weight: 100; }\n\n.wrapper .instruction {\n  color: #bfbfbf;\n  padding: 30px 0;\n  margin-top: auto; }\n\n.wrapper .todo-wrapper {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n  background: white; }\n\n.wrapper .todo-wrapper app-header {\n    height: 40px;\n    padding: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGR1eWt5XFx3ZWJcXGFuZ3VsYXJcXHRvZG8tbXZjL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBOEI7RUFDOUIsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCOztBQU5IO0VBU0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCOztBQVpIO0VBZUksNkVBQTRFO0VBQzVFLGtCQUFpQixFQVFsQjs7QUF4Qkg7SUFtQk0sYUFBWTtJQUNaLGNBQWE7SUFDYiw0Q0FBMkM7SUFDM0MsMkNBQTBDLEVBQzNDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICYgLnRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcclxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuXHJcbiAgJiAuaW5zdHJ1Y3Rpb24ge1xyXG4gICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJiAudG9kby13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICAmIGFwcC1oZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todoService.fetchFromLocalStorage();
        this.hasTodo$ = this.todoService.length$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (length) { return length > 0; }));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "./src/app/components/todo-item/todo-item.component.ts");
/* harmony import */ var _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/todo-input/todo-input.component */ "./src/app/components/todo-input/todo-input.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"],
                _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__["TodoItemComponent"],
                _components_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_10__["TodoInputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer w-100\" *ngIf=\"length\">\n  <div class=\"position-absolute d-flex justify-content-between align-items-center\"\n    style=\"top:0; bottom: 0; left: 0; right: 0\">\n    <span class=\"items-count\">\n      {{length}} item{{length > 1 ? 's' : ''}}\n    </span>\n    <div>\n      <button type=\"button\" class=\"filter-btn\" *ngFor=\"let btn of filterButtons\" [ngClass]=\"{active: btn.isActive}\"\n        (click)=\"filter(btn.type)\">\n        {{btn.label}}</button>\n    </div>\n    <button class=\"filter-btn clear-completed-btn\" [ngClass]=\"{'visible': hasComplete$ | async}\"\n      (click)=\"clearCompleted()\">clear completed</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: relative;\n  height: 40px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n  .footer:before {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 50px;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2); }\n  .footer .filter-btn {\n    padding: 5px;\n    border-radius: 0.25rem;\n    transition: 250ms all ease-in-out;\n    outline: none;\n    cursor: pointer;\n    margin-right: 5px;\n    background: #fff;\n    border: 1px solid white; }\n  .footer .filter-btn:hover, .footer .filter-btn.active {\n      border-color: burlywood; }\n  .footer .clear-completed-btn {\n    visibility: hidden; }\n  .footer .clear-completed-btn.visible {\n      visibility: visible; }\n  .footer .items-count {\n    padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXGR1eWt5XFx3ZWJcXGFuZ3VsYXJcXHRvZG8tbXZjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1oseUNBQXdDLEVBMEN6QztFQTdDRDtJQU1JLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFVBQVM7SUFDVCxRQUFPO0lBQ1AsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQiw2SkFFb0MsRUFDckM7RUFoQkg7SUFtQkksYUFBWTtJQUNaLHVCQUFzQjtJQUN0QixrQ0FBaUM7SUFDakMsY0FBYTtJQUNiLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQix3QkFBdUIsRUFNeEI7RUFoQ0g7TUE4Qk0sd0JBQXVCLEVBQ3hCO0VBL0JMO0lBb0NJLG1CQUFrQixFQUtuQjtFQXpDSDtNQXVDTSxvQkFBbUIsRUFDcEI7RUF4Q0w7SUEyQ0ksbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxyXG4gICAgICAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcclxuICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gICYgLmZpbHRlci1idG4ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IDI1MG1zIGFsbCBlYXNlLWluLW91dDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gICYgLmNsZWFyLWNvbXBsZXRlZC1idG4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICAgICYudmlzaWJsZSB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYgLml0ZW1zLWNvdW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_filtering_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/filtering.model */ "./src/app/models/filtering.model.ts");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FooterComponent = /** @class */ (function () {
    function FooterComponent(todoService) {
        this.todoService = todoService;
        this.filterButtons = [
            { type: src_app_models_filtering_model__WEBPACK_IMPORTED_MODULE_2__["Filter"].All, label: 'All', isActive: true },
            { type: src_app_models_filtering_model__WEBPACK_IMPORTED_MODULE_2__["Filter"].Active, label: 'Active', isActive: false },
            { type: src_app_models_filtering_model__WEBPACK_IMPORTED_MODULE_2__["Filter"].Completed, label: 'Completed', isActive: false }
        ];
        this.length = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasComplete$ = this.todoService.todos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (todos) { return todos.some(function (t) { return t.isCompleted; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$));
        this.todoService.length$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (length) {
            _this.length = length;
        });
    };
    FooterComponent.prototype.filter = function (type) {
        this.setActivefilterBtn(type);
        this.todoService.filterTodos(type);
    };
    FooterComponent.prototype.setActivefilterBtn = function (type) {
        this.filterButtons.forEach(function (btn) {
            btn.isActive = btn.type === type;
        });
    };
    FooterComponent.prototype.clearCompleted = function () {
        this.todoService.clearCompleted();
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center h-100\">\n  <span class=\"icon-wrapper h-100 text-center\">\n    <i class=\"eva eva-chevron-down\" (click)=\"toggleAll()\"></i>\n  </span>\n  <app-todo-input></app-todo-input>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-wrapper {\n  width: 40px;\n  line-height: 40px;\n  font-size: 40px;\n  color: gray;\n  background: white;\n  transition: 250ms all ease-in-out;\n  cursor: pointer; }\n  .icon-wrapper:hover {\n    color: black; }\n  app-todo-input {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXGR1eWt5XFx3ZWJcXGFuZ3VsYXJcXHRvZG8tbXZjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtDQUFpQztFQUNqQyxnQkFBZSxFQUtoQjtFQVpEO0lBVUksYUFBWSxFQUNiO0VBRUg7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi13cmFwcGVyIHtcclxuICB3aWR0aDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMjUwbXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbmFwcC10b2RvLWlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(todoService) {
        this.todoService = todoService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleAll = function () {
        this.todoService.toggleAll();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-input/todo-input.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/todo-input/todo-input.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)]=\"todoContent\" (keyup.enter)=\"onSubmit()\" class=\"h-100 w-100\"\n        placeholder=\"What needs to be done?\" required>"

/***/ }),

/***/ "./src/app/components/todo-input/todo-input.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/todo-input/todo-input.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  outline: none;\n  border: none;\n  margin-left: 10px;\n  font-size: 30px; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5; }\n\n::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5; }\n\n::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWlucHV0L0M6XFxkdXlreVxcd2ViXFxhbmd1bGFyXFx0b2RvLW12Yy9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9kby1pbnB1dFxcdG9kby1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVksRUFDYjs7QUFIRDtFQUNFLDBCQUF5QjtFQUN6QixhQUFZLEVBQ2I7O0FBSEQ7RUFDRSwwQkFBeUI7RUFDekIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWlucHV0L3RvZG8taW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-input/todo-input.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-input/todo-input.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function() { return TodoInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");



var TodoInputComponent = /** @class */ (function () {
    function TodoInputComponent(todoService) {
        this.todoService = todoService;
        this.todoContent = '';
    }
    TodoInputComponent.prototype.ngOnInit = function () {
    };
    TodoInputComponent.prototype.onSubmit = function () {
        if (this.todoContent.trim() === '') {
            return false;
        }
        this.todoService.addTodo(this.todoContent);
        this.todoContent = '';
    };
    TodoInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-input',
            template: __webpack_require__(/*! ./todo-input.component.html */ "./src/app/components/todo-input/todo-input.component.html"),
            styles: [__webpack_require__(/*! ./todo-input.component.scss */ "./src/app/components/todo-input/todo-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodoInputComponent);
    return TodoInputComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-item d-flex justify-content-between align-items-center\" (mouseover)=\"isHovered = true\"\n  (mouseout)=\"isHovered = false\">\n  <div class=\"todo\">\n    <input type=\"checkbox\" \n      [id]=\"todo.id\" \n      [ngClass]=\"{checked: todo.isCompleted}\"\n      class=\"toggle text-center\" \n      [checked]=\"todo.isCompleted\"\n      (change)=\"changeTodoStatus()\"\n      >\n    <label [@fadeStrikeThrough]=\"todo.isCompleted ? 'completed' : 'active' \" [for]=\"todo.id\">{{todo.content}}</label>\n  </div>\n\n  <div class=\"d-flex align-items-center\">\n    <span class=\"icon-wrapper text-center edit\" [hidden]=\"todo.isCompleted\" [ngClass]=\"{ active: isHovered }\">\n      <i class=\"eva eva-edit-outline\" (click)=\"isEditing = true\"></i>\n    </span>\n    <span class=\"icon-wrapper text-center\" [ngClass]=\"{ active: isHovered }\">\n      <i class=\"eva eva-close\" (click)=\"removeTodo()\"></i>\n    </span>\n  </div>\n\n  <form class=\"edit-form\" (keyup)=\"submitEdit($event)\" *ngIf=\"isEditing\">\n    <input type=\"text\" name=\"editTodo\" [(ngModel)]=\"todo.content\" />\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-item {\n  min-height: 50px;\n  padding: 0 5px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: relative; }\n  .todo-item .todo {\n    position: relative;\n    cursor: pointer;\n    font-size: 18px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .todo-item .todo .toggle {\n      width: 40px;\n      height: auto;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      margin: auto 0;\n      border: none;\n      outline: none;\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none; }\n  .todo-item .todo .toggle + label {\n      background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n      background-repeat: no-repeat;\n      background-position: center left; }\n  .todo-item .todo .toggle.checked + label {\n      background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\"); }\n  .todo-item .todo label {\n      word-break: break-all;\n      padding: 15px 15px 15px 60px;\n      display: block; }\n  .todo-item .icon-wrapper {\n    height: 25px;\n    width: 25px;\n    font-size: 25px;\n    color: white;\n    background: white;\n    transition: 250ms all ease-in-out; }\n  .todo-item .icon-wrapper:hover {\n      -webkit-transform: scale(1.2, 1.2);\n              transform: scale(1.2, 1.2);\n      color: #f74e30; }\n  .todo-item .icon-wrapper.active {\n      color: tomato;\n      cursor: pointer; }\n  .todo-item .icon-wrapper.edit:hover {\n      -webkit-transform: scale(1.2, 1.2);\n              transform: scale(1.2, 1.2);\n      color: #00a2ff; }\n  .todo-item .icon-wrapper.edit.active {\n      color: deepskyblue;\n      cursor: pointer; }\n  .todo-item .edit-form {\n    position: absolute;\n    width: 98.5%;\n    height: 100%;\n    background: white; }\n  .todo-item .edit-form input {\n      height: 92%;\n      width: 90%;\n      margin-left: 30px;\n      font-size: 18px;\n      padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vQzpcXGR1eWt5XFx3ZWJcXGFuZ3VsYXJcXHRvZG8tbXZjL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b2RvLWl0ZW1cXHRvZG8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QseUNBQXdDO0VBQ3hDLG1CQUFrQixFQWtGbkI7RUF0RkQ7SUFPSSxtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixnQkFBZTtJQUNmLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQixFQTZCbEI7RUF2Q0g7TUFhTSxZQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQixPQUFNO01BQ04sVUFBUztNQUNULGVBQWM7TUFDZCxhQUFZO01BQ1osY0FBYTtNQUNiLHlCQUFnQjtTQUFoQixzQkFBZ0I7Y0FBaEIsaUJBQWdCLEVBQ2pCO0VBdEJMO01BeUJNLHFVQUFvVTtNQUNwVSw2QkFBNEI7TUFDNUIsaUNBQWdDLEVBQ2pDO0VBNUJMO01BK0JNLDBhQUF5YSxFQUMxYTtFQWhDTDtNQW1DTSxzQkFBcUI7TUFDckIsNkJBQTRCO01BQzVCLGVBQWMsRUFDZjtFQXRDTDtJQTBDSSxhQUFZO0lBQ1osWUFBVztJQUNYLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixrQ0FBaUMsRUF1QmxDO0VBdEVIO01Ba0RNLG1DQUEwQjtjQUExQiwyQkFBMEI7TUFDMUIsZUFBdUIsRUFDeEI7RUFwREw7TUF1RE0sY0FBYTtNQUNiLGdCQUFlLEVBQ2hCO0VBekRMO01BNkRRLG1DQUEwQjtjQUExQiwyQkFBMEI7TUFDMUIsZUFBdUIsRUFDeEI7RUEvRFA7TUFrRVEsbUJBQWtCO01BQ2xCLGdCQUFlLEVBQ2hCO0VBcEVQO0lBeUVJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osYUFBWTtJQUNaLGtCQUFpQixFQVNsQjtFQXJGSDtNQStFTSxZQUFXO01BQ1gsV0FBVTtNQUNWLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWl0ZW0ge1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYgLnRvZG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgJiAudG9nZ2xlIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmIC50b2dnbGUgKyBsYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNlZGVkZWQlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQy9zdmclM0UnKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiAudG9nZ2xlLmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNiZGRhZDUlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyJTIzNWRjMmFmJTIyJTIwZCUzRCUyMk03MiUyMDI1TDQyJTIwNzElMjAyNyUyMDU2bC00JTIwNCUyMDIwJTIwMjAlMjAzNC01MnolMjIvJTNFJTNDL3N2ZyUzRScpO1xyXG4gICAgfVxyXG5cclxuICAgICYgbGFiZWwge1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAuaWNvbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gICAgICBjb2xvcjogcmdiKDI0NywgNzgsIDQ4KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB0b21hdG87XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH0gXHJcblxyXG4gICAgJi5lZGl0IHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjIsIDI1NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5lZGl0LWZvcm0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk4LjUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgJiBpbnB1dCB7XHJcbiAgICAgIGhlaWdodDogOTIlO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/todo.model */ "./src/app/models/todo.model.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var fadeStrikeThroughAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeStrikeThrough', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        fontSize: '18px',
        color: 'black'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('completed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        fontSize: '17px',
        color: 'Lightgrey',
        textDecoration: 'line-through'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('active <=> completed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(250)]),
]);
var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent() {
        this.changeStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isHovered = false;
        this.isEditing = false;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.changeTodoStatus = function () {
        this.changeStatus.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.todo, { isCompleted: !this.todo.isCompleted }));
    };
    TodoItemComponent.prototype.submitEdit = function (event) {
        var keyCode = event.keyCode;
        event.preventDefault(); // prevent form to submit by default
        if (keyCode === 13) {
            this.editTodo.emit(this.todo);
            this.isEditing = false;
        }
    };
    TodoItemComponent.prototype.removeTodo = function () {
        this.deleteTodo.emit(this.todo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TodoItemComponent.prototype, "changeStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TodoItemComponent.prototype, "editTodo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TodoItemComponent.prototype, "deleteTodo", void 0);
    TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/components/todo-item/todo-item.component.html"),
            animations: [fadeStrikeThroughAnimation],
            styles: [__webpack_require__(/*! ./todo-item.component.scss */ "./src/app/components/todo-item/todo-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo-item *ngFor=\"let todo of todos$ | async\" [todo]=\"todo\"\n    (editTodo)=\"onEditTodo($event)\"\n    (deleteTodo)=\"onRemoveTodo($event)\"\n    (changeStatus)=\"onChangeStatus($event)\"\n></app-todo-item>\n\n"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.todos$ = this.todoService.todos$;
    };
    TodoListComponent.prototype.onChangeStatus = function (todo) {
        this.todoService.changeTodoStatus(todo.id, todo.isCompleted);
    };
    TodoListComponent.prototype.onEditTodo = function (todo) {
        this.todoService.editTodo(todo.id, todo.content);
    };
    TodoListComponent.prototype.onRemoveTodo = function (todo) {
        this.todoService.removeTodo(todo.id);
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/components/todo-list/todo-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/models/filtering.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/filtering.model.ts ***!
  \*******************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
var Filter;
(function (Filter) {
    Filter[Filter["All"] = 0] = "All";
    Filter[Filter["Active"] = 1] = "Active";
    Filter[Filter["Completed"] = 2] = "Completed";
})(Filter || (Filter = {}));


/***/ }),

/***/ "./src/app/models/todo.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(id, content, isCompleted) {
        if (isCompleted === void 0) { isCompleted = false; }
        this.id = id;
        this.content = content;
        this.isCompleted = isCompleted;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.storage = window.localStorage;
    }
    LocalStorageService.prototype.set = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorageService.prototype.get = function (key) {
        return this.storage[key] || false;
    };
    LocalStorageService.prototype.setObject = function (key, value) {
        if (!value) {
            return;
        }
        this.storage[key] = JSON.stringify(value);
    };
    LocalStorageService.prototype.getObject = function (key) {
        return JSON.parse(this.storage[key] || '{}');
    };
    LocalStorageService.prototype.getValue = function (key) {
        var obj = JSON.parse(this.storage[key] || null);
        return obj || null;
    };
    LocalStorageService.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    LocalStorageService.prototype.clear = function () {
        this.storage.clear();
    };
    Object.defineProperty(LocalStorageService.prototype, "length", {
        get: function () {
            return this.storage.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorageService.prototype, "isStorageEmpty", {
        get: function () {
            return this.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/todo.model */ "./src/app/models/todo.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_filtering_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/filtering.model */ "./src/app/models/filtering.model.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");






var TodoService = /** @class */ (function () {
    function TodoService(storageService) {
        this.storageService = storageService;
        this.lengthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.todosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentFilter = _models_filtering_model__WEBPACK_IMPORTED_MODULE_4__["Filter"].All;
        this.displayTodosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.todos$ = this.displayTodosSubject.asObservable();
        this.length$ = this.lengthSubject.asObservable();
    }
    TodoService_1 = TodoService;
    TodoService.prototype.fetchFromLocalStorage = function () {
        this.todos = this.storageService.getValue(TodoService_1.TodoStoragekey) || [];
        this.filteredTodos = this.todos.slice();
        this.updateTodosData();
    };
    TodoService.prototype.updateToLocalStorage = function () {
        this.storageService.setObject(TodoService_1.TodoStoragekey, this.todos);
        this.filterTodos(this.currentFilter, false);
        this.updateTodosData();
    };
    TodoService.prototype.addTodo = function (todoContent) {
        var date = new Date().getTime();
        var newTodo = new _models_todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"](date, todoContent);
        this.todos.unshift(newTodo);
        this.updateToLocalStorage();
    };
    TodoService.prototype.changeTodoStatus = function (id, isCompleted) {
        var index = this.todos.findIndex(function (t) { return t.id === id; });
        var todo = this.todos[index];
        todo.isCompleted = isCompleted;
        this.todos.splice(index, 1, todo);
        this.updateToLocalStorage();
    };
    TodoService.prototype.editTodo = function (id, content) {
        var index = this.todos.findIndex(function (t) { return t.id === id; });
        var todo = this.todos[index];
        todo.content = content;
        this.todos.splice(index, 1, todo);
        this.updateToLocalStorage();
    };
    TodoService.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (t) { return t.id === id; });
        this.todos.splice(index, 1);
        this.updateToLocalStorage();
    };
    TodoService.prototype.toggleAll = function () {
        var _this = this;
        this.todos = this.todos.map(function (todo) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo, { isCompleted: !_this.todos.every(function (t) { return t.isCompleted; }) });
        });
        this.updateToLocalStorage();
    };
    TodoService.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.isCompleted; });
        this.updateToLocalStorage();
    };
    TodoService.prototype.filterTodos = function (filter, isFiltering) {
        if (isFiltering === void 0) { isFiltering = true; }
        this.currentFilter = filter;
        switch (filter) {
            case _models_filtering_model__WEBPACK_IMPORTED_MODULE_4__["Filter"].Active:
                this.filteredTodos = this.todos.filter(function (todo) { return !todo.isCompleted; });
                break;
            case _models_filtering_model__WEBPACK_IMPORTED_MODULE_4__["Filter"].Completed:
                this.filteredTodos = this.todos.filter(function (todo) { return todo.isCompleted; });
                break;
            case _models_filtering_model__WEBPACK_IMPORTED_MODULE_4__["Filter"].All:
                this.filteredTodos = this.todos.slice();
                break;
        }
        if (isFiltering) {
            this.updateTodosData();
        }
    };
    TodoService.prototype.updateTodosData = function () {
        this.displayTodosSubject.next(this.filteredTodos);
        this.lengthSubject.next(this.todos.length);
    };
    var TodoService_1;
    TodoService.TodoStoragekey = 'todos';
    TodoService = TodoService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\duyky\web\angular\todo-mvc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map