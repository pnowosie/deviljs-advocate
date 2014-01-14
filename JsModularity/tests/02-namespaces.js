"use strict";
/**
        ** Przestrzenie nazw
        
        * Po co? 
        *  By zminimalizować ilość nazw, które zadeklarujemy w globalnym scope
        *  By nadać logiczną struktrę obiektów, np. MyApp.ViewModels.AddUserVM, MyApp.Utils.Logger ...

        * Ale nie chcemy się zastanawiać jakie moduły deklarujemy w jakiej kolejności:
        //  module1.js:

        var MyApp = {};
        MyApp.Utils = ...

        // module2.js
        var MyApp = {}
        MyApp.Data = ...

        Zamiast tego chcemy mieć:
        //  module1.js (każdy inny podobnie):

        namespace('MyApp.Utils');
        MyApp.Utils = ...


        * To nie jedyny sposób strukturyzowania kodu, pokażemy lepsze sposoby, ale
        -  jakiś moduł(y) będzie globalny wykorzystywany w każdym innym module,
        -  będziemy mieć jakieś stałe, konfiguracje, I18N ...

        * Ważne by nie przesadzać z ilością zagłębień: 
        *  MyApp.Client.UI.Web.Inventory.ViewModels.Basket.AddItemToBasket() 
        
        *  - nie mądre... to nie jest C#
        * każde odwołanie do właściwości wewnątrz obiektu nie jest za darmo, 
        * zwłaszcza NIE RÓB tak w pętli
            
 */

/*
    * A przy okazji to jest nasz kod testowy: na przykładzie /// <reference path="Z_array_test_sample.js" />
 */
describe('02. Namespaces', function () {

    it('Should create object for single root namespace', function () {
        expect(window.NS).to.not.exist;

        namespace('NS');

        NS.should.exists;
        NS.should.be.deep.equal({});
    });
    
    it('Should create empty objects', function () {
        var _app = window.App;
        expect(_app).to.not.exist;

        namespace('App.Module1');

        App.should.exists;
        App.Module1.should.exists;
    });
    
    it('Should extend existing objects', function () {
        namespace('App.Module1');
        namespace('App.Module2');
        
        App.should.exists;
        App.Module1.should.exists;
        App.Module2.should.exists;

        App.Module2.value = 1;

        namespace('App.Module2.Submodule1');
        App.Module1.should.exists;
        App.Module2.should.exists;
        App.Module2.Submodule1.should.exists;
        App.Module2.value.should.be.equal(1);
    });

});