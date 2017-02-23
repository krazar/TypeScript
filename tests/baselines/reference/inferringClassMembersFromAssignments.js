//// [tests/cases/conformance/salsa/inferringClassMembersFromAssignments.ts] ////

//// [a.js]

class C {
    constructor() {
        if (Math.random()) {
            this.inConstructor = 0;
        }
        else {
            this.inConstructor = "string"
        }
    }
    method() {
        if (Math.random()) {
            this.inMethod = 0;
        }
        else {
            this.inMethod = "string"
        }
    }
    get() {
        if (Math.random()) {
            this.inGetter = 0;
        }
        else {
            this.inGetter = "string"
        }
    }
    set() {
        if (Math.random()) {
            this.inSetter = 0;
        }
        else {
            this.inSetter = "string"
        }
    }
    static method() {
        if (Math.random()) {
            this.inStaticMethod = 0;
        }
        else {
            this.inStaticMethod = "string"
        }
    }
    static get() {
        if (Math.random()) {
            this.inStaticGetter = 0;
        }
        else {
            this.inStaticGetter = "string"
        }
    }
    static set() {
        if (Math.random()) {
            this.inStaticSetter = 0;
        }
        else {
            this.inStaticSetter = "string"
        }
    }
}

//// [b.ts]
var c = new C();

var stringOrNumber: string | number;
var stringOrNumber = c.inConstructor;

var stringOrNumberOrUndefined: string | number | undefined;

var stringOrNumberOrUndefined = c.inMethod;
var stringOrNumberOrUndefined = c.inGetter;
var stringOrNumberOrUndefined = c.inSetter;

var stringOrNumberOrUndefined = C.inStaticMethod;
var stringOrNumberOrUndefined = C.inStaticGetter;
var stringOrNumberOrUndefined = C.inStaticSetter;


//// [output.js]
var C = (function () {
    function C() {
        if (Math.random()) {
            this.inConstructor = 0;
        }
        else {
            this.inConstructor = "string";
        }
    }
    C.prototype.method = function () {
        if (Math.random()) {
            this.inMethod = 0;
        }
        else {
            this.inMethod = "string";
        }
    };
    C.prototype.get = function () {
        if (Math.random()) {
            this.inGetter = 0;
        }
        else {
            this.inGetter = "string";
        }
    };
    C.prototype.set = function () {
        if (Math.random()) {
            this.inSetter = 0;
        }
        else {
            this.inSetter = "string";
        }
    };
    C.method = function () {
        if (Math.random()) {
            this.inStaticMethod = 0;
        }
        else {
            this.inStaticMethod = "string";
        }
    };
    C.get = function () {
        if (Math.random()) {
            this.inStaticGetter = 0;
        }
        else {
            this.inStaticGetter = "string";
        }
    };
    C.set = function () {
        if (Math.random()) {
            this.inStaticSetter = 0;
        }
        else {
            this.inStaticSetter = "string";
        }
    };
    return C;
}());
var c = new C();
var stringOrNumber;
var stringOrNumber = c.inConstructor;
var stringOrNumberOrUndefined;
var stringOrNumberOrUndefined = c.inMethod;
var stringOrNumberOrUndefined = c.inGetter;
var stringOrNumberOrUndefined = c.inSetter;
var stringOrNumberOrUndefined = C.inStaticMethod;
var stringOrNumberOrUndefined = C.inStaticGetter;
var stringOrNumberOrUndefined = C.inStaticSetter;
