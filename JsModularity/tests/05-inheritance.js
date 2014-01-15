"use strict";

/*
    Prototype chain - jak znajdowana jest właściwość w obiekcie
    metoda hasOwnProperty(), jak obiekt znajduje swój prototyp

    Co umieszczamy w obiekcie (właściwości własne), a co w prototypie
    Czy na pewno potrzebujemy rozległych hierarchii klas?

 */

// base class
var Beast = {
    hasTeeth: true,
    hasClaws: true,
    eat: function(food) { return true; }
};

// derived
var Cat = function() {
    this.name = 'default cat name';
    this.owner = 'Ala';
};
Cat.prototype = Beast;
Cat.prototype.constructor = Beast;

Cat.prototype.eat = function(food) {
    return food instanceof Milk;
};

var Tiger = function() {
    this.owner = null;
};
Tiger.prototype = new Cat;
Tiger.prototype.constructor = Cat;
// itd.




describe('05. Javascript prototypal inheritance', function() {

    it('Prototype chain, how object finds its property?', function() {
        var tiger = new Tiger;

        false.should.be.equal(tiger.hasOwnProperty('hasTeeth'));
        should.exist(tiger.hasTeeth);

        true.should.be.equal(tiger.hasOwnProperty('owner'));
        tiger.eat.should.be.equal(Cat.prototype.eat);
    });

});