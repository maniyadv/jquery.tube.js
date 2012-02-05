describe('Tube', function () {
  var Tube = $.tube.Tube;
  
  describe('Constructor', function () {
    
  });
  
  describe('.serialize', function () {
    
    it('returns an empty string by default', function () {
      Tube.serialize().should.equal('');
      Tube.serialize(null).should.equal('');
    });
    
    describe('when passed a string', function () {
      it('returns an empty string for ""', function () {
        Tube.serialize('').should.equal('');
      });
      
      it('returns the string uri encoded', function () {
        Tube.serialize('foo').should.equal('foo');
        Tube.serialize('foo bar').should.equal('foo%20bar');
      });
    });
    
    describe('when passed an array', function () {
      it('returns an empty string for []', function () {
        Tube.serialize([]).should.equal('');
      });
      
      it('returns all items uri encoded and joined with "&"', function () {
        Tube.serialize(['foo']).should.equal('0=foo');
        Tube.serialize(['foo', 'foo bar']).should.equal('0=foo&1=foo%20bar');
      });
    });

    describe('when passed an object', function () {
      it('returns an empty string for {}', function () {
        Tube.serialize({}).should.equal('');
      });
      
      it('returns all items uri encoded and joined with "&"', function () {
        Tube.serialize({ foo: 'bar' }).should.equal('foo=bar');
        Tube.serialize({ foo: 'bar', bar: 'foo bar'}).should.equal('foo=bar&bar=foo%20bar');
      });
      
    });
    
    describe('when an API key is present', function () {
      var key = $.tube.constants.key;
      
      beforeEach(function () {
        $.tube.constants.key = 'THEKEY';
      });
      
      afterEach(function () {
        $.tube.constants.key = key;
      });
      
      it('adds the key to the list of parameters', function () {
        Tube.serialize().should.equal('key=THEKEY');
        Tube.serialize('xy').should.equal('xy&key=THEKEY');
      });

      
    });
  });
  
});
