"use strict";
/*
    - Scope w JS tworzy tylko funkcja

 */
describe('01. Scope and scope chain', function () {
    
    it('Function scope', function() {
        should.exist(newScope, 'function newScope()');
        newScope.should.be.a('function');
        should.not.exist(a);


        var a = 1, b;

        a.should.be.equal(1);
        should.not.exist(b);
        should.not.exist(c);
        //should.not.exist(d);       <- d is not defined

        newScope.should.be.a('function');

        b = 2;
        a.should.be.equal(1);
        b.should.be.equal(2);


        //var newScope =
        function newScope(x) {
            

            x.should.be.equal(9);   //<======== 
                                              //
            
            
            a.should.be.equal(1);          //
            b.should.be.equal(2);         //
            should.not.exist(c);         //
            var c = 5;

            var inF = 8;              //
        }                            //
        newScope(9);          // <====

        should.not.exist(c);
        var c = 0;
        a.should.be.equal(1);
    });

    it('IFI - it is good to know this js pattern', function() {

        // IFI == Immediate function invocation
        (function() {           // <-- annonymous function

            /* some code */
        })();                   // <-- immediate invocation

        /*
            Po co tworzyć funkcje i wywoływać ją w tym samym miejscu? Czy to nie jest dziwne?
            Nie. To znany wzorzec JS (IFI)

                1. bo scope - nie zaśmiecamy globalnego, nie nadpisujemy wartości w scope-chain,
                2. bo closure - o tym za chwilę,
                3. bo tak :)
         */
    });
});
