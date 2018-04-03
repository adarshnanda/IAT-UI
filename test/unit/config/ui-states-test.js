var  $state, $injector;
describe("A test suite", function() {
   beforeEach(module('ui.select', 'ngSanitize','ui.router'));
   beforeEach(module('iat'));
   beforeEach(inject(function(_$state_, _$injector_) {
   	$state =  _$state_;
    $injector = _$injector_;
   }));
   afterEach(function(){
   	$state = null;
    $injector = null;
   });
   it('it shoud test the ui-states', function() {
    var state = $state.get('search');
    expect(state.templateUrl).to.equal('scripts/views/search.html');
   });
});