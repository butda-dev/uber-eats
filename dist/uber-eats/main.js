(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\uber-eats\src\main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "hq4X");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "hq4X", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContentComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_p_1_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.selectCategory(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active-title", ctx_r0.selectedCategory === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
} }
function ContentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.selectedDish = i_r7; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("checked-dish", ctx_r1.selectedDish === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.secondName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r6.price, " \u20BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r6.backgroundUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", item_r6.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r6.firstName);
} }
class ContentComponent {
    constructor() {
        this.selectedDish = -1;
        this.selectedCategory = 0;
        this.dishList = _data_json__WEBPACK_IMPORTED_MODULE_0__;
        this.categories = ["Закуски", "Салаты", "Супы", "Горячие блюда", "Гарниры", "Десерты"];
        this.selectedList = this.dishList.filter(x => x.category == this.categories[this.selectedCategory]);
    }
    ngOnInit() {
    }
    selectCategory(i) {
        this.selectedCategory = i;
        this.selectedList = this.dishList.filter(x => x.category == this.categories[i]);
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 8, vars: 3, consts: [[1, "categories"], ["class", "categories__title", 3, "active-title", "click", 4, "ngFor", "ngForOf"], [1, "content"], [1, "content__title"], [1, "content__underline"], [1, "content__range"], ["class", "dish", 3, "checked-dish", "click", 4, "ngFor", "ngForOf"], [1, "categories__title", 3, "click"], [1, "dish", 3, "click"], [1, "dish__description"], [1, "dish__title"], [1, "dish__text"], [1, "dish__price"], [1, "dish__image"], [3, "src", "alt", "title"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentComponent_p_1_Template, 2, 3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContentComponent_div_7_Template, 10, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.categories[ctx.selectedCategory]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".categories[_ngcontent-%COMP%] {\n  display: none;\n}\n.categories__title[_ngcontent-%COMP%] {\n  color: #626262;\n  cursor: pointer;\n}\n@media screen and (min-width: 473px) {\n  .categories__title[_ngcontent-%COMP%] {\n    margin: 0 1em 0 0.5em;\n    font: normal 400 12px \"Roboto\", Arial, sans-serif;\n  }\n}\n@media screen and (min-width: 565px) {\n  .categories__title[_ngcontent-%COMP%] {\n    margin: 0 2em 0 0.5em;\n    font: normal 400 14px \"Roboto\", Arial, sans-serif;\n  }\n}\n@media screen and (min-width: 768px) {\n  .categories__title[_ngcontent-%COMP%] {\n    margin: 0 2.5em 0 0.5em;\n    font: normal 400 16px \"Roboto\", Arial, sans-serif;\n  }\n}\n@media screen and (min-width: 473px) {\n  .categories[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n    height: 80px;\n    align-items: center;\n    border-bottom: 0.1em solid #D8D8D8;\n  }\n}\n@media screen and (min-width: 768px) {\n  .categories[_ngcontent-%COMP%] {\n    padding-left: 7.3vw;\n  }\n}\n.active-title[_ngcontent-%COMP%] {\n  color: #327430;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 4px 0 8px;\n  font: normal 400 22px \"Roboto\", Arial, sans-serif;\n}\n.content__title[_ngcontent-%COMP%] {\n  margin: 112px 0 0 0;\n  color: #1D1D1D;\n}\n@media screen and (min-width: 473px) {\n  .content__title[_ngcontent-%COMP%] {\n    margin-top: 56px;\n  }\n}\n@media screen and (min-width: 768px) {\n  .content__title[_ngcontent-%COMP%] {\n    margin-left: 0.703vw;\n  }\n}\n.content__underline[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 1px;\n  margin: 12px auto 0 auto;\n  background: #757575;\n}\n@media screen and (min-width: 473px) {\n  .content__underline[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content__range[_ngcontent-%COMP%] {\n  margin-top: 27px;\n  margin-bottom: 40px;\n}\n@media screen and (min-width: 768px) {\n  .content__range[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 0;\n    margin-bottom: 63px;\n  }\n}\n@media screen and (min-width: 473px) {\n  .content[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-bottom: 48px;\n  }\n}\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 0 7.038vw 0 6.598vw;\n  }\n}\n.dish[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n}\n.dish__description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  box-sizing: border-box;\n  flex-grow: 1;\n  text-align: left;\n  border-bottom: 1px solid #D8D8D8;\n}\n@media screen and (min-width: 473px) {\n  .dish__description[_ngcontent-%COMP%] {\n    padding: 16px 0 16px 24px;\n    border-top: 1px solid #D8D8D8;\n    border-left: 1px solid #D8D8D8;\n  }\n}\n.dish__title[_ngcontent-%COMP%] {\n  margin-block-start: 0;\n  margin-block-end: 0;\n  width: 205px;\n  font-size: 14px;\n  color: #1D1D1D;\n}\n@media screen and (min-width: 473px) {\n  .dish__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 228px;\n  }\n}\n.dish__text[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  width: 200px;\n  font-size: 13px;\n  color: #626262;\n}\n.dish__price[_ngcontent-%COMP%] {\n  margin-block-start: 80px;\n  position: absolute;\n  font-size: 15px;\n  font-weight: 550;\n  color: #1D1D1D;\n}\n@media screen and (min-width: 473px) {\n  .dish__price[_ngcontent-%COMP%] {\n    margin-block-start: 90px;\n  }\n}\n.dish__image[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  height: 102px;\n  border-radius: 2px;\n}\n.dish__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 102px;\n  width: 102px;\n  image-rendering: pixelated;\n}\n@media screen and (min-width: 473px) {\n  .dish__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 160px;\n    width: 200px;\n    image-rendering: -webkit-optimize-contrast;\n  }\n}\n@media screen and (min-width: 473px) {\n  .dish__image[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n}\n@media screen and (min-width: 473px) {\n  .dish[_ngcontent-%COMP%] {\n    height: 160px;\n    margin-top: 32px;\n  }\n}\n@media screen and (min-width: 768px) {\n  .dish[_ngcontent-%COMP%] {\n    flex: 1 1 45%;\n    margin-left: 0.703vw;\n    margin-right: 0.703vw;\n    margin-bottom: 17px;\n  }\n}\n@media screen and (min-width: 1086px) {\n  .dish[_ngcontent-%COMP%] {\n    flex: 0 1 45%;\n  }\n}\n.checked-dish[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpc3RcXGNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxhQUFBO0FBTkY7QUFRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTko7QUFRSTtFQUpGO0lBS0kscUJBQUE7SUFDQSxpREFBQTtFQUxKO0FBQ0Y7QUFPSTtFQVRGO0lBVUkscUJBQUE7SUFDQSxpREFBQTtFQUpKO0FBQ0Y7QUFNSTtFQWRGO0lBZUksdUJBQUE7SUFDQSxpREFBQTtFQUhKO0FBQ0Y7QUFNRTtFQXZCRjtJQXdCSSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQ0FBQTtFQUhGO0FBQ0Y7QUFLRTtFQS9CRjtJQWdDSSxtQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FBRkY7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUZKO0FBSUk7RUFKRjtJQUtJLGdCQUFBO0VBREo7QUFDRjtBQUdJO0VBUkY7SUFTSSxvQkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFORjtJQU9JLGFBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQUpGO0lBS0ksYUFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGO0FBR0U7RUF6Q0Y7SUEwQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQTlDRjtJQStDSSwyQkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUNJO0VBUkY7SUFTSSx5QkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7RUFFSjtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQVBGO0lBUUksZUFBQTtJQUNBLFlBQUE7RUFFSjtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFFSTtFQVBGO0lBUUksd0JBQUE7RUFDSjtBQUNGO0FBRUU7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQU47QUFFTTtFQUxGO0lBTUksYUFBQTtJQUNBLFlBQUE7SUFDQSwwQ0FBQTtFQUNOO0FBQ0Y7QUFFSTtFQWpCRjtJQWtCSSxhQUFBO0VBQ0o7QUFDRjtBQUVFO0VBMUVGO0lBMkVJLGFBQUE7SUFDQSxnQkFBQTtFQUNGO0FBQ0Y7QUFDRTtFQS9FRjtJQWdGSSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0VBRUY7QUFDRjtBQURFO0VBckZGO0lBc0ZJLGFBQUE7RUFJRjtBQUNGO0FBREE7RUFDSSxtQkFBQTtBQUlKIiwiZmlsZSI6ImNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuJHNjcmVlbi14cyA6IDQ3M3B4O1xyXG4kc2NyZWVuLXNtIDogNTY1cHg7XHJcbiRzY3JlZW4tbWQgOiA3NjhweDtcclxuJHNjcmVlbi1sZyA6IDEwODZweDtcclxuXHJcbi5jYXRlZ29yaWVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIFxyXG4gICZfX3RpdGxlIHtcclxuICAgIGNvbG9yOiAjNjI2MjYyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgICBtYXJnaW46IDAgMWVtIDAgLjVlbTtcclxuICAgICAgZm9udDogbm9ybWFsIDQwMCAxMnB4ICRmb250LWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXNtKXtcclxuICAgICAgbWFyZ2luOiAwIDJlbSAwIC41ZW07XHJcbiAgICAgIGZvbnQ6IG5vcm1hbCA0MDAgMTRweCAkZm9udC1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCl7XHJcbiAgICAgIG1hcmdpbjogMCAyLjVlbSAwIC41ZW07XHJcbiAgICAgIGZvbnQ6IG5vcm1hbCA0MDAgMTZweCAkZm9udC1mYW1pbHk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzKXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjFlbSBzb2xpZCAjRDhEOEQ4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3LjN2dztcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtdGl0bGUge1xyXG4gIGNvbG9yOiAjMzI3NDMwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCA0cHggMCA4cHg7XHJcbiAgZm9udDogbm9ybWFsIDQwMCAyMnB4ICRmb250LWZhbWlseTtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAxMTJweCAwIDAgMDtcclxuICAgIGNvbG9yOiAjMUQxRDFEO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tbWQpe1xyXG4gICAgICBtYXJnaW4tbGVmdDogLjcwM3Z3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdW5kZXJsaW5lIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDEycHggYXV0byAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzU3NTc1O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcmFuZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCl7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNjNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICBtYXJnaW46IDAgNy4wMzh2dyAwIDYuNTk4dnc7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDAgMTZweCAyNHB4O1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q4RDhEODtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcclxuICAgIHdpZHRoOiAyMDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMUQxRDFEO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAyMjhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM2MjYyNjI7XHJcbiAgfVxyXG5cclxuICAmX19wcmljZSB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgY29sb3I6ICMxRDFEMUQ7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14cyl7XHJcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogOTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ltYWdlIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgaGVpZ2h0OiAxMDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICB3aWR0aDogMTAycHg7XHJcbiAgICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14cyl7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14cyl7XHJcbiAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzKXtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCl7XHJcbiAgICBmbGV4OiAxIDEgNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43MDN2dztcclxuICAgIG1hcmdpbi1yaWdodDogMC43MDN2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tbGcpe1xyXG4gICAgZmxleDogMCAxIDQ1JTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja2VkLWRpc2gge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/background.component */ "ybZN");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'Uber eats new';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["href", "#top"], [1, "scroll-up"], ["src", "assets/img/Restaurant/arrow.svg", "alt", "arrow"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".scroll-up[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 64px;\n  height: 64px;\n  bottom: 24px;\n  right: 16px;\n  background: #59BD5A;\n  border-radius: 2px;\n  opacity: 0.5;\n}\n@media screen and (min-width: 473px) {\n  .scroll-up[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcZGlzdFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQWJGO0lBY0ksV0FBQTtJQUNBLFlBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzY3JlZW4teHMgOiA0NzNweDtcclxuXHJcbi5zY3JvbGwtdXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJvdHRvbTogMjRweDtcclxuICByaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjNTlCRDVBO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background/background.component */ "ybZN");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [["id", "top", 1, "header"], [1, "header__logo"], [1, "header__nav"], [1, "header__nav-btn"], ["title", "\u041A\u043E\u0440\u0437\u0438\u043D\u0430", 1, "header__basket"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n}\n.header__logo[_ngcontent-%COMP%] {\n  width: 106px;\n  height: 13px;\n  margin-left: 8.5px;\n  background-image: url('logo.svg');\n  background-repeat: no-repeat;\n}\n@media screen and (min-width: 768px) {\n  .header__logo[_ngcontent-%COMP%] {\n    margin-left: 7.3vw;\n  }\n}\n.header__nav[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n@media screen and (min-width: 473px) {\n  .header__nav[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 768px) {\n  .header__nav[_ngcontent-%COMP%] {\n    margin-right: 7.74vw;\n  }\n}\n.header__nav-btn[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  font: normal 500 13px \"Roboto\", Arial, sans-serif;\n  border: 1px solid #E0E0E0;\n  border-radius: 5%;\n  background: #fff;\n}\n@media screen and (min-width: 473px) {\n  .header__nav-btn[_ngcontent-%COMP%] {\n    margin-right: 16px;\n  }\n}\n@media screen and (min-width: 473px) {\n  .header__basket[_ngcontent-%COMP%] {\n    height: 72px;\n    width: 40px;\n    background: url('basket.svg') center no-repeat #fff;\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpc3RcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQUxOO0FBT007RUFQRjtJQVFJLGtCQUFBO0VBSk47QUFDRjtBQU9JO0VBQ0UsaUJBQUE7QUFMTjtBQU9NO0VBSEY7SUFJSSxhQUFBO0lBQ0EsbUJBQUE7RUFKTjtBQUNGO0FBTU07RUFSRjtJQVNJLG9CQUFBO0VBSE47QUFDRjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpOO0FBTU07RUFQRjtJQVFJLGtCQUFBO0VBSE47QUFDRjtBQVFNO0VBRkY7SUFHSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1EQUFBO0lBQ0EsZUFBQTtFQUxOO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRzY3JlZW4teHMgOiA0NzNweDtcclxuJHNjcmVlbi1zbSA6IDU2NXB4O1xyXG4kc2NyZWVuLW1kIDogNzY4cHg7XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIFxyXG4gICAgJl9fbG9nbyB7XHJcbiAgICAgIHdpZHRoOiAxMDZweDtcclxuICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOC41cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2xvZ28uc3ZnKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3LjN2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fbmF2IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNy43NHZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19uYXYtYnRuIHtcclxuICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgICBmb250OiBub3JtYWwgNTAwIDEzcHggJGZvbnQtZmFtaWx5O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14cykge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fYmFza2V0IHtcclxuICBcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14cykge1xyXG4gICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9SZXN0YXVyYW50L2Jhc2tldC5zdmcpIGNlbnRlciBuby1yZXBlYXQgI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 38, vars: 0, consts: [[1, "footer"], [1, "footer__hat"], ["src", "assets/img/Restaurant/white-logo.svg", "alt", "uber-eats", 1, "footer__logo"], [1, "footer__main"], ["name", "select", 1, "footer__select"], ["value", "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"], ["value", "English"], [1, "uber-eats"], [1, "uber-eats__text"], [1, "uber-eats__links"], [1, "footer__nav-text"], [1, "footer__nav-text", "offset-bottom"], [1, "download-links"], ["src", "assets/img/Restaurant/Download_on_the_App_Store_Badge.png", "alt", "App Store", "title", "App store download", 1, "download-links__ap-store"], ["src", "assets/img/Restaurant/google_play.png", "alt", "Google Play", "title", "Google Play download", 1, "download-links__google-pl"], [1, "footer-end"], [1, "footer-end__text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "UberEats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E\u0431 UberEats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Become a Delivery Partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u0442\u0430\u043D\u044C\u0442\u0435 \u043F\u0430\u0440\u043D\u0451\u0440\u043E\u043C-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0426\u0435\u043D\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u043E\u043C\u043E\u0449\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A9 2017 Uber Technologies Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  padding: 0 8px 0 8px;\n  background: #262626;\n  font: normal 400 13px \"Roboto\", Arial, sans-serif;\n  color: #fff;\n}\n.footer__hat[_ngcontent-%COMP%] {\n  height: 116px;\n  border-bottom: 0.1em solid #979797;\n}\n.footer__logo[_ngcontent-%COMP%] {\n  margin: 56px auto 40.31px 0.62px;\n}\n.footer__main[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding-bottom: 40px;\n  border-bottom: 0.1em solid #979797;\n}\n@media screen and (min-width: 473px) {\n  .footer__main[_ngcontent-%COMP%] {\n    height: 148px;\n    display: flex;\n    flex-flow: column wrap;\n  }\n}\n.footer__select[_ngcontent-%COMP%] {\n  width: 173px;\n  height: 40px;\n  padding: 12px 55px 12px 48px;\n  border-style: none;\n  background: url('if_icon-ios7-arrow-back_211686-1.svg') 150px 15px no-repeat, url('world.svg') 24px no-repeat #3B3B3B;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font: normal 400 13px \"Roboto\", Arial, sans-serif;\n  color: #fff;\n}\n@media screen and (min-width: 473px) {\n  .footer__select[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n  }\n}\n.footer__nav-text[_ngcontent-%COMP%] {\n  margin-block-start: 23px;\n  margin-block-end: 0;\n  cursor: pointer;\n}\n@media screen and (min-width: 473px) {\n  .footer__nav-text[_ngcontent-%COMP%] {\n    margin-block-start: 0;\n    margin-block-end: 22px;\n  }\n}\n@media screen and (min-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 0 87px 0 81px;\n  }\n}\n.offset-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.uber-eats[_ngcontent-%COMP%] {\n  height: 59px;\n  width: 100px;\n  margin: 32px 0 39px 0;\n  font-size: 16px;\n  color: #49A144;\n}\n.uber-eats__text[_ngcontent-%COMP%] {\n  display: inline;\n  color: #fff;\n  cursor: pointer;\n}\n.uber-eats__links[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  height: 24px;\n  cursor: pointer;\n  background: url('facebook.svg') -2px no-repeat, url('twitter.svg') center no-repeat, url('instagram.svg') right no-repeat;\n}\n@media screen and (min-width: 473px) {\n  .uber-eats[_ngcontent-%COMP%] {\n    flex: 0 1 30%;\n    margin-bottom: 0;\n  }\n}\n.download-links[_ngcontent-%COMP%] {\n  height: 84px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 0.1em solid #979797;\n}\n.download-links__ap-store[_ngcontent-%COMP%] {\n  padding-right: 24px;\n  cursor: pointer;\n}\n@media screen and (min-width: 473px) {\n  .download-links__ap-store[_ngcontent-%COMP%] {\n    padding-right: 40px;\n  }\n}\n.download-links__google-pl[_ngcontent-%COMP%] {\n  width: 124px;\n  image-rendering: pixelated;\n  cursor: pointer;\n}\n@media screen and (min-width: 473px) {\n  .download-links__google-pl[_ngcontent-%COMP%] {\n    width: 135pxpx;\n  }\n}\n@media screen and (min-width: 473px) {\n  .download-links[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\n.footer-end[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: space-evenly;\n  padding: 40px 0 40px 0;\n}\n.footer-end__text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-block-start: 12px;\n  margin-block-end: 12px;\n  cursor: pointer;\n}\n@media screen and (min-width: 473px) {\n  .footer-end__text[_ngcontent-%COMP%] {\n    flex: 0 1 34%;\n    font-size: 9px;\n  }\n}\n@media screen and (min-width: 565px) {\n  .footer-end__text[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media screen and (min-width: 473px) {\n  .footer-end[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding: 28px 0 28px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpc3RcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7QUFORjtBQVFFO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FBTko7QUFTRTtFQUNFLGdDQUFBO0FBUEo7QUFVRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQVJKO0FBVUk7RUFMRjtJQU1JLGFBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFQSjtBQUNGO0FBVUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtBQVJKO0FBVUk7RUFWRjtJQVdJLGNBQUE7RUFQSjtBQUNGO0FBVUU7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVJKO0FBVUk7RUFMRjtJQU1JLHFCQUFBO0lBQ0Esc0JBQUE7RUFQSjtBQUNGO0FBVUU7RUFyREY7SUFzREksc0JBQUE7RUFQRjtBQUNGO0FBVUE7RUFDRSxtQkFBQTtBQVBGO0FBVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFQRjtBQVNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5SEFBQTtBQVJKO0FBV0U7RUFwQkY7SUFxQkksYUFBQTtJQUNBLGdCQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFSRjtBQVVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBUko7QUFVSTtFQUpGO0lBS0ksbUJBQUE7RUFQSjtBQUNGO0FBVUU7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBUko7QUFVSTtFQUxGO0lBTUksY0FBQTtFQVBKO0FBQ0Y7QUFVRTtFQTFCRjtJQTJCSSxhQUFBO0VBUEY7QUFDRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFQSjtBQVNJO0VBTkY7SUFPSSxhQUFBO0lBQ0EsY0FBQTtFQU5KO0FBQ0Y7QUFRSTtFQVhGO0lBWUksZUFBQTtFQUxKO0FBQ0Y7QUFRRTtFQXRCRjtJQXVCSSxtQkFBQTtJQUNBLHNCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuJHNjcmVlbi14cyA6IDQ3M3B4O1xyXG4kc2NyZWVuLXNtIDogNTY1cHg7XHJcbiRzY3JlZW4tbWQgOiA3NjhweDtcclxuJHNjcmVlbi1sZyA6IDExMjRweDtcclxuXHJcbi5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyNjI2MjY7XHJcbiAgZm9udDogbm9ybWFsIDQwMCAxM3B4ICRmb250LWZhbWlseTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgJl9faGF0IHtcclxuICAgIGhlaWdodDogMTE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAuMWVtIHNvbGlkICM5Nzk3OTc7XHJcbiAgfVxyXG5cclxuICAmX19sb2dvIHtcclxuICAgIG1hcmdpbjogNTZweCBhdXRvIDQwLjMxcHggLjYycHg7XHJcbiAgfVxyXG5cclxuICAmX19tYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IC4xZW0gc29saWQgIzk3OTc5NztcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzKSB7XHJcbiAgICAgIGhlaWdodDogMTQ4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE3M3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTJweCA1NXB4IDEycHggNDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL1Jlc3RhdXJhbnQvaWZfaWNvbi1pb3M3LWFycm93LWJhY2tfMjExNjg2LTEuc3ZnKSAxNTBweCAxNXB4IG5vLXJlcGVhdCwgdXJsKC4uLy4uL2Fzc2V0cy9pbWcvUmVzdGF1cmFudC93b3JsZC5zdmcpIDI0cHggbm8tcmVwZWF0ICMzQjNCM0I7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZm9udDogbm9ybWFsIDQwMCAxM3B4ICRmb250LWZhbWlseTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpIHtcclxuICAgICAgZmxleDogMCAxIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19uYXYtdGV4dCB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIzcHg7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpIHtcclxuICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xyXG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiAyMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgcGFkZGluZzogMCA4N3B4IDAgODFweDtcclxuICB9XHJcbn1cclxuXHJcbi5vZmZzZXQtYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4udWJlci1lYXRzIHtcclxuICBoZWlnaHQ6IDU5cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogMzJweCAwIDM5cHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM0OUExNDQ7XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19saW5rcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvUmVzdGF1cmFudC9pYy8yNC9zb2NpYWwvZmFjZWJvb2suc3ZnKSAtMnB4IG5vLXJlcGVhdCwgdXJsKC4uLy4uL2Fzc2V0cy9pbWcvUmVzdGF1cmFudC9pYy8yNC9zb2NpYWwvdHdpdHRlci5zdmcpIGNlbnRlciBuby1yZXBlYXQsIHVybCguLi8uLi9hc3NldHMvaW1nL1Jlc3RhdXJhbnQvaWMvMjQvc29jaWFsL2luc3RhZ3JhbS5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpIHtcclxuICAgIGZsZXg6IDAgMSAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmRvd25sb2FkLWxpbmtzIHtcclxuICBoZWlnaHQ6IDg0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IC4xZW0gc29saWQgIzk3OTc5NztcclxuXHJcbiAgJl9fYXAtc3RvcmUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzKSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19nb29nbGUtcGwge1xyXG4gICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14cykge1xyXG4gICAgICB3aWR0aDogMTM1cHhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLWVuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMTJweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpIHtcclxuICAgICAgZmxleDogMCAxIDM0JTtcclxuICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1zbSkge1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogMjhweCAwIDI4cHggMDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "hq4X":
/*!***********************************!*\
  !*** ./src/app/content/data.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"firstName\":\"Сельдь на бородинском хлебе\",\"secondName\":\"С яйцом и огурцом\",\"price\":\"240\",\"backgroundUrl\":\"assets/img/Restaurant/photo-5.png\",\"category\":\"Закуски\"},{\"firstName\":\"Соленья ассорти\",\"secondName\":\"\",\"price\":\"320\",\"backgroundUrl\":\"assets/img/Restaurant/photo-4.png\",\"category\":\"Закуски\"},{\"firstName\":\"Грибы маринованные\",\"secondName\":\"\",\"price\":\"300\",\"backgroundUrl\":\"assets/img/Restaurant/photo-3.png\",\"category\":\"Закуски\"},{\"firstName\":\"Сало домашнее с горчицей\",\"secondName\":\"\",\"price\":\"320\",\"backgroundUrl\":\"assets/img/Restaurant/photo-2.png\",\"category\":\"Закуски\"},{\"firstName\":\"Малосольная семга\",\"secondName\":\"\",\"price\":\"390\",\"backgroundUrl\":\"assets/img/Restaurant/photo-1.png\",\"category\":\"Закуски\"},{\"firstName\":\"Язык говяжий с хреном\",\"secondName\":\"\",\"price\":\"350\",\"backgroundUrl\":\"assets/img/Restaurant/photo-12.png\",\"category\":\"Закуски\"},{\"firstName\":\"Салат с куриным филе\",\"secondName\":\"С салатными листьями и овощами\",\"price\":\"150\",\"backgroundUrl\":\"assets/img/Restaurant/salat-1.jpg\",\"category\":\"Салаты\"},{\"firstName\":\"Салат слоеный с лососем\",\"secondName\":\"С творожным сыром, чесночком и хреном\",\"price\":\"160\",\"backgroundUrl\":\"assets/img/Restaurant/salat-2.jpg\",\"category\":\"Салаты\"},{\"firstName\":\"Креветки гриль со свежим салатом и овощами\",\"secondName\":\"Под горчично-бальзамическим дрессингом\",\"price\":\"220\",\"backgroundUrl\":\"assets/img/Restaurant/salat-3.jpg\",\"category\":\"Салаты\"},{\"firstName\":\"Суп с рыбой и морепродуктами\",\"secondName\":\"\",\"price\":\"300\",\"backgroundUrl\":\"assets/img/Restaurant/sup-1.jpg\",\"category\":\"Супы\"},{\"firstName\":\"Борщ с говядиной\",\"secondName\":\"С ломтиком сала на хлебном чипсе и сметаной\",\"price\":\"300\",\"backgroundUrl\":\"assets/img/Restaurant/sup-2.jpg\",\"category\":\"Супы\"},{\"firstName\":\"Суп с гедза\",\"secondName\":\"С уткой в соевом бульоне с пекинской капустой и яйцом\",\"price\":\"220\",\"backgroundUrl\":\"assets/img/Restaurant/sup-3.jpg\",\"category\":\"Супы\"},{\"firstName\":\"Вырезка говядины на гриле\",\"secondName\":\"С соусом порто на блинчике с булгуром и грибами\",\"price\":\"120\",\"backgroundUrl\":\"assets/img/Restaurant/gor-1.jpg\",\"category\":\"Горячие блюда\"},{\"firstName\":\"Фланк-стейк\",\"secondName\":\"С овощами гриль и соусом из черного перца\",\"price\":\"160\",\"backgroundUrl\":\"assets/img/Restaurant/gor-2.jpg\",\"category\":\"Горячие блюда\"},{\"firstName\":\"Рубленый бифштекс\",\"secondName\":\"С сыром, яйцом пашот, малосольными огурчиками и картофелем с чесночком\",\"price\":\"200\",\"backgroundUrl\":\"assets/img/Restaurant/gor-3.jpg\",\"category\":\"Горячие блюда\"},{\"firstName\":\"Ром-баба\",\"secondName\":\"Пропитанная ромом с сорбетом из вишни\",\"price\":\"80\",\"backgroundUrl\":\"assets/img/Restaurant/des-1.jpg\",\"category\":\"Десерты\"},{\"firstName\":\"Брусничный торт\",\"secondName\":\"С нежным кремом из сыра\",\"price\":\"150\",\"backgroundUrl\":\"assets/img/Restaurant/des-2.jpg\",\"category\":\"Десерты\"},{\"firstName\":\"Фруктовая ваза\",\"secondName\":\"Груши, виноград, апельсины, яблоки, ананас, киви, ягоды\",\"price\":\"850\",\"backgroundUrl\":\"assets/img/Restaurant/des-3.jpg\",\"category\":\"Десерты\"},{\"firstName\":\"Рис мексиканский\",\"secondName\":\"\",\"price\":\"120\",\"backgroundUrl\":\"assets/img/Restaurant/garn-12.jpg\",\"category\":\"Гарниры\"}]");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ybZN":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["app-background"]], decls: 9, vars: 0, consts: [[1, "background"], [1, "external-block"], [1, "external-block__text"], [1, "external-block__shell"], [1, "external-block__sub-text"], [1, "external-block__btn"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0422\u0440\u0430\u043A\u0442\u0438\u0440 \u00AB\u041F\u0443\u0448\u043A\u0438\u043D\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u20BD\u20BD\u20BD \u2022 \u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "40 - 50 \u043C\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".background[_ngcontent-%COMP%] {\n  position: relative;\n  height: 255px;\n  background-image: url('photo.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 1;\n}\n@media screen and (min-width: 473px) {\n  .background[_ngcontent-%COMP%] {\n    height: 364px;\n    background-image: url('bc-md.svg');\n  }\n}\n@media screen and (min-width: 768px) {\n  .background[_ngcontent-%COMP%] {\n    background-image: url('bc-lg.svg');\n  }\n}\n.external-block[_ngcontent-%COMP%] {\n  top: 203px;\n  left: 8px;\n  position: absolute;\n  width: 308px;\n  height: 180px;\n  text-align: center;\n  z-index: 2;\n  font: normal 400 24px \"Roboto\", Arial, sans-serif;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.external-block__text[_ngcontent-%COMP%] {\n  margin-block-start: 24px;\n  color: #1D1D1D;\n}\n.external-block__sub-text[_ngcontent-%COMP%] {\n  margin-block-start: 40px;\n  margin-block-end: 0;\n  font-size: 14px;\n  color: #626262;\n}\n@media screen and (min-width: 473px) {\n  .external-block__sub-text[_ngcontent-%COMP%] {\n    margin-block-start: 0;\n    margin-right: 110px;\n  }\n}\n.external-block__btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 9px 16px 8px 16px;\n  font-size: 12px;\n  border-radius: 16px;\n  border-style: unset;\n  background: #262626;\n  color: #fff;\n}\n@media screen and (min-width: 473px) {\n  .external-block__btn[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n@media screen and (min-width: 473px) {\n  .external-block__shell[_ngcontent-%COMP%] {\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 54px;\n  }\n}\n@media screen and (min-width: 473px) {\n  .external-block[_ngcontent-%COMP%] {\n    top: 152px;\n    width: 432px;\n    height: 204px;\n    font-size: 36px;\n    box-shadow: none;\n  }\n}\n@media screen and (min-width: 768px) {\n  .external-block[_ngcontent-%COMP%] {\n    left: 7.3vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpc3RcXGJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBTkY7QUFRRTtFQVJGO0lBU0ksYUFBQTtJQUNBLGtDQUFBO0VBTEY7QUFDRjtBQU9FO0VBYkY7SUFjSSxrQ0FBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBSko7QUFNRTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtBQUpKO0FBT0U7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFMSjtBQU9JO0VBTkY7SUFPSSxxQkFBQTtJQUNBLG1CQUFBO0VBSko7QUFDRjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTEo7QUFPSTtFQVRGO0lBVUksYUFBQTtFQUpKO0FBQ0Y7QUFTSTtFQUZGO0lBR0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUFOSjtBQUNGO0FBU0U7RUF2REY7SUF3REksVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBTkY7QUFDRjtBQVFFO0VBL0RGO0lBZ0VJLFdBQUE7RUFMRjtBQUNGIiwiZmlsZSI6ImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuJHNjcmVlbi14cyA6IDQ3M3B4O1xyXG4kc2NyZWVuLXNtIDogNTY1cHg7XHJcbiRzY3JlZW4tbWQgOiA3NjhweDtcclxuJHNjcmVlbi1sZyA6IDExMjRweDtcclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyNTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9waG90by5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzKXtcclxuICAgIGhlaWdodDogMzY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9SZXN0YXVyYW50L2JjLW1kLnN2Zyk7IFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvUmVzdGF1cmFudC9iYy1sZy5zdmcpO1xyXG4gIH1cclxufVxyXG5cclxuLmV4dGVybmFsLWJsb2NrIHtcclxuICAgIHRvcDogMjAzcHg7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzA4cHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZvbnQ6IG5vcm1hbCA0MDAgMjRweCAkZm9udC1mYW1pbHk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzFEMUQxRDtcclxuICB9XHJcblxyXG4gICZfX3N1Yi10ZXh0IHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogNDBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzYyNjI2MjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzKXtcclxuICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA5cHggMTZweCA4cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHVuc2V0O1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjYyNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fc2hlbGwge1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMpe1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14cyl7XHJcbiAgICB0b3A6IDE1MnB4O1xyXG4gICAgd2lkdGg6IDQzMnB4O1xyXG4gICAgaGVpZ2h0OiAyMDRweDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICBsZWZ0OiA3LjN2dztcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map