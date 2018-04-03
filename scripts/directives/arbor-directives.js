

/* Directives */
angular.module('iat').directive('arbor', function() {
    return{
        restrict: 'A',
        scope: {
            graphData1: '=data'
        },
        link: function(scope, elem, attrs) {
            scope.$watch('graphData1', function(v) {
                var id = String('#'+attrs.id);
                console.log("watching graph data");
                console.log("scope.id:"+id);
                console.log(v);
				// Initialise arbor
                sys = arbor.ParticleSystem();
				sys.parameters({stiffness:600, repulsion:2000, gravity:false, dt:0.015});
				sys.renderer = Renderer(id);
				sys.graft(v);
				sys.merge(v);
				sys.tweenNode("isDateEligible", 3, {color:"#0431B4", radius:2})
				sys.start();
            });
        }
    };
});
