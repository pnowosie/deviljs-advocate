"use strict";

/*
    Funkcja jest obiektem, ma swoje metody tj. apply/call
    ma również swoje właściwosci, nas interesuje szczegolnie jedna z nich: prototype
 */

describe('04. Function.prototype - property', function() {

    var Cat = function() {
        this.owner = 'Ala';
    };
    Cat.prototype.say = function() {
        return "Miał!";
    };

    var mruczek = new Cat;

    Cat.prototype.eat = function(food) {
        if (!(food instanceof Milk)) throw 'up';
        // ...
    };

    it('Prototype works only with constructor functions', function() {

        ("Miał!").should.be.equal(mruczek.say());
        mruczek.eat.should.be.a('function');
    });

    it('All instances share prototype\'s properties', function() {
        var cat = new Cat;
        cat.eat.should.be.equal(mruczek.eat);
    });

    it('instanceof operator', function () {
        var F = function() {};
        var G = function () { };
        G.prototype = new F();

        // create instance 
        var g = new G();

        true.should.be.equal( g instanceof G );
        true.should.be.equal( g instanceof F );
    });
    
    it('Constructor property of object', function() {

        mruczek.constructor.should.be.a('function');
        mruczek.constructor.should.be.equal(Cat);
        
        // to działa jeśli rozszerzamy prototyp, jesli nadpisujemy:
        // G.prototype = new F();
        // musimy poprawić ręcznie:
        // G.prototype.constructor = F;

    });

    it('You shouldn\'t use __proto__ property', function() {
        mruczek.__proto__.should.be.a('object');
        
        // ES5 getPrototypeOf function
        should.exist(Object.getPrototypeOf(mruczek));
    });
});