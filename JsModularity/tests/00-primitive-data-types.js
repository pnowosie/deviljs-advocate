"use strict";

/*
  Co dostajemy od JS na starcie:

    - globalny scope = window, a w nim:
        * funkcja alert() - zapomnieć, niestosować, wiocha ;) // ale czasami użycie uzasadnione
        * console.log(), console.dir(), console.error() - klasyka skryptów
        * dziwactwa operatora '==' (i analogicznie '!=') - używaj '===' i '!==' 
        * "use strict"
        * Prymitywne typy i operator typeof
 
 
 */
describe('00. Basic Javascript', function() {

    it('You should not use alert() unless you know what you\'re doing', function () { });
    it('You should be familiar with console object and its functions', function () { });
    it('Prefer === and !== over == / !=', function () { });
    it('"use strict" is your friend!', function () { });
    it('Primitive data types and "typeof" operator', function() {

        "number".should.be.equal(typeof 3.14);
        "string".should.be.equal(typeof '');
        "boolean".should.be.equal(typeof true);
        "undefined".should.be.equal(typeof undefined);
        "undefined".should.be.equal(typeof niezadeklarowana);
        "function".should.be.equal(typeof console.log);
        "object".should.be.equal(typeof {});
        
        // ale to już jest dziwne
        "object".should.be.equal(typeof []);    // jak sprawdzić, że coś jest tablicą?
        
        // a co powiecie o tym?
        "object".should.be.equal(typeof null);    // brrrr!
    });

});