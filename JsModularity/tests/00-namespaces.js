describe('Namespaces', function() {
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