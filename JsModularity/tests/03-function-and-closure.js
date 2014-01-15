"use strict";
/*
    Jak możemy wywołać funkcję w JS i czym jest this?
    Funkcje zwracające funkcje i ich własności
    Funkcja czyli instancja obiektu, ile funkcji tu utworzyliśmy?
    Funkcja-konstruktor i jej właściwości
 */
var x = 'global scope';
var obj = {
    x: 'obj',
    f: function() { return this.x; }  
};
var f = obj.f;      // <-- window.f = obj.f;
    

describe('03.0. Function and ways of invocation', function() {
    // UWAGA: 'this' - nie ma nic (za dużo) wspólnego z obiektem, w którym zadeklarowaliśmy funkcję
    // Dowód:


    it('Invocation as a method', function() {
        obj.f().should.be.equal('obj');
    });

    it('Normal function invocation', function() {
        //throw 'dupa';
        f.should.be.a('function');
        (window.f()).should.be.equal('global scope');
    });

    it('Apply/Call invocation', function() {
        // spreparujemy obiekt na którym wywołamy funkcje
        var myObj = { x: 'myObj rulez!' };

        var result = obj.f.call(myObj /*, params*/);
        // każda funkcja ma ^--      -- 'metodę' call
        // pierwszym parametrem  ^- jest obiekt 'this'
    });

    it('Bind - we\'re not defenseless [out scope - sorry]');
});

describe('03.1. Function and closure', function() {

    it('what is closure?', function() {

        var f = function(p) {

            var a = 1;

            var pf = function () {   // this is private
                var b = 3;
                return a * p + b;
            };

            return function() { return pf(); };
        };

        var g = function(fun) {
            // pf: a * p + b
            // a == 1, b == 3;
            // p == 2 (below)
            // pf() == 1 * 2 + 3 = 5
            (5).should.be.equal( fun() ) ;
        };

        g(f(2));
    });

    it('Closure - I don\'t get it', function() {

        // Tablica funArr[0..9] z funkcjami 
        // chcemy by: f_i = funArr[i], f_i() == i (zwracała swój index w tablicy) 

        var funArr = new Array(10), len = funArr.length;
        for (var i = 0; i < len; i++)
            funArr[i] = function () { return i; };

        funArr.should.have.length(len);
        (10).should.be.equal( funArr[0]() );      // Oops!
        (10).should.be.equal( funArr[9]() );      // as above ;)

    });

    it('How many functions I\'ve created?', function() {

        var funArr = new Array(10), len = funArr.length;
        for (var i = 0; i < len; i++)
            funArr[i] = (function(j) {
                 return function() { return j; };
            })(i);
        
        funArr.should.have.length(len);
        (0).should.be.equal( funArr[0]() );      // Tak ma być!
        (9).should.be.equal( funArr[9]() );      // ...tylko tych funkcji za dużo :(
    });

    it('Closure - it\'s (should be) simple now', function() {

        var funArr = new Array(10), len = funArr.length;
        var funFactory = function(j) {
            return function () { return j; };
        };

        for (var i = 0; i < len; i++)
            funArr[i] = funFactory(i);
        
        funArr.should.have.length(len);
        (0).should.be.equal( funArr[0]() );      // Tak ma być!
        (9).should.be.equal( funArr[9]() );      // The (happy) end
    });

});

describe('03.2. Constructor functions', function() {

    it('new - operator with function call', function() {

        var Cat = function(owner) {      // <-- Wielką literą (konwencja)
            this.owner = owner;
            this.say = function() { return 'Miał!'; };
        };

        var mruczek = new Cat('Ala');
        mruczek.say().should.be.equal('Miał!');
        mruczek.owner.should.be.equal('Ala');
    });
});