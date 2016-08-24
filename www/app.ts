declare var ons;
declare var angular;

ons.ready(function() {
    console.log("Onsen UI is ready!?");  
});
/*
var app = ons.bootstrap('app', ['onsen', 'angular-sortable-view', 'textAngular', 'lvl.directives.dragdrop']);
*/
/*
var app = ons.bootstrap('app'
, ['onsen', 'textAngular', 'dndLists']);
*/
/*
var app=angular.module('app', ['onsen', 'textAngular', 'dndLists']);
*/

var app=angular.module('app', ['onsen', 'textAngular', 'dndLists']);


/*
app.directive('highlightOnLoad', function($parse){
	return {
		compile: function($element, $attrs){
			return function($scope, $element, $attrs){
				$element.text($parse($attrs.highlightOnLoad)($scope));
			};
		}
	};
}).
directive('highlightAfterDigest', function($parse){
	return function($scope, $element, $attrs){
		$scope.$$postDigest(function(){
			//PR.prettyPrint();
		});
	};
});
*/

app.controller('AppController', ['$scope', 
    
    function($scope) {

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);


    $scope.load = function(page) {
      $scope.mySplitterContent.load(page);
    }
    $scope.open = function() {
      $scope.mySplitterSide.open();
    }
    $scope.close = function() {
      $scope.mySplitterSide.close();
    }
}]);




/*
app.controller('AppController', ['$scope', 'textAngularManager', 
    
    function($scope, textAngularManager) {

    $scope.version = textAngularManager.getVersion();
    $scope.versionNumber = $scope.version.substring(1);
    $scope.orightml = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><img class="ta-insert-video" ta-insert-video="http://www.youtube.com/embed/2maA1-mvicY" src="" allowfullscreen="true" width="300" frameborder="0" height="250"/></p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE9+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p><h4>Supports non-latin Characters</h4><p>昮朐 魡 燚璒瘭 譾躒鑅, 皾籈譧 紵脭脧 逯郹酟 煃 瑐瑍, 踆跾踄 趡趛踠 顣飁 廞 熥獘 豥 蔰蝯蝺 廦廥彋 蕍蕧螛 溹溦 幨懅憴 妎岓岕 緁, 滍 蘹蠮 蟷蠉蟼 鱐鱍鱕, 阰刲 鞮鞢騉 烳牼翐 魡 骱 銇韎餀 媓幁惁 嵉愊惵 蛶觢, 犝獫 嶵嶯幯 縓罃蔾 魵 踄 罃蔾 獿譿躐 峷敊浭, 媓幁 黐曮禷 椵楘溍 輗 漀 摲摓 墐墆墏 捃挸栚 蛣袹跜, 岓岕 溿 斶檎檦 匢奾灱 逜郰傃</p>';
    $scope.htmlcontent = $scope.orightml;
    $scope.disabled = false;

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);


    $scope.load = function(page) {
      $scope.mySplitterContent.load(page);
    }
    $scope.open = function() {
      $scope.mySplitterSide.open();
    }
    $scope.close = function() {
      $scope.mySplitterSide.close();
    }
}]);
*/

/*
			app.controller('ddController', ['$scope' , function($scope){ // function referenced by the drop target
				$scope.dropped = function(dragEl, dropEl) {
					//this is application logic, for the demo we just want to color the grid squares
					//the directive provides a native dom object, wrap with jqlite
					var drop = angular.element(dropEl);
					var drag = angular.element(dragEl);
				
					//clear the previously applied color, if it exists
					var bgClass = drop.attr('data-color');
					if (bgClass) {
						drop.removeClass(bgClass);
					}

					//add the dragged color
					bgClass = drag.attr("data-color");
					drop.addClass(bgClass);
					drop.attr('data-color', bgClass);

					//if element has been dragged from the grid, clear dragged color
					if (drag.attr("x-lvl-drop-target")) {
						drag.removeClass(bgClass);
					}
				}
			}]);

*/

/*
    	function getArray(size, prefix){
			var arr = [];
			prefix = prefix || '';
			for(var i=0;i<size;i++){
				arr.push(prefix + i);
			}
			return arr;
		}
		function AppController2($scope, $location){
			$scope.tab = 7;
			$scope.$watch(function(){
				return $location.search();
			}, function(obj){
				if(obj.tab)
					$scope.tab = obj.tab + '';
			}, true);

			$scope.$watch('tab', function(tab){
				$location.search({tab: tab});
			});
			$scope.data = {
				items1: getArray(20, '1.'),
				items2: getArray(20, '2.'),
				items3: getArray(6, '3.'),
				items4: getArray(20, '4.'),
				items5: [
					getArray(8, '5.'),
					getArray(8, '6.'),
					getArray(8, '7.'),
					getArray(0, '8.'),	
				],
				items6: getArray(10, '9.'),
				items7: getArray(7, '10.'),
				items8: getArray(10, '11.'),
				items9: getArray(7, '12.'),
			};
			$scope.containmentChange = function(val){
				this.opts.containment = val ? '.sortable-container' : 'html';
			};
			$scope.printArray = function(arr){
				return '[' + arr.toString().replace(/([^,]+)/g, '"$1"').replace(/,/g, ', ') + ']';
			};
			$scope.onSorted = function(){
				console.log(arguments);
			};
			$scope.onStarted = function(){
				console.log(arguments);
			};
			$scope.onStopped = function(){
				console.log(arguments);
			};
			$scope.example1Source = '<div class="sortable-container" sv-root sv-part="data.items1">\n' +
									'	<div ng-repeat="item in data.items1" sv-element="opts" class="well">\n' +
									'		{{item}}\n' +
									'	</div>\n' +
									'</div>';
			$scope.example2Source = '<div sv-root class="multi-sortable">\n' +
									'	<div class="sortable-container" sv-part="data.items2">\n' +
									'		<div ng-repeat="item in data.items2" sv-element class="well multi">\n' +
									'			{{item}}\n' +
									'		</div>\n' +
									'	</div>\n' +
									'	<div class="sortable-container" sv-part="data.items3">\n' +
									'		<div ng-repeat="item in data.items3" sv-element class="well multi">\n' +
									'			{{item}}\n' +
									'		</div>\n' +
									'	</div>\n' +
									'</div>';
			$scope.example3Source = '<div class="sortable-container grid" sv-root sv-part="data.items4">\n' +
									'	<div ng-repeat="item in data.items4" sv-element="opts" class="well grid">\n' +
									'		{{item}}\n' +
									'		<span sv-handle>handle</span>\n' +
									'	</div>\n' +
									'</div>';
			$scope.example4Source = '<div class="multi-multi-sortable" ng-repeat="foo in [0, 1, 2, 3]">\n' +
									'	<div class="sortable-container" sv-root="multiple_{{$odd}}" sv-part="data.items5[$index]">\n' +
									'		<div ng-repeat="item in data.items5[$index]" sv-element class="well multi">\n' +
									'			{{item}}\n' +
									'		</div>\n' +
									'	</div>\n' +
									'</div>\n';
			$scope.example5Source = '<div class="multi-sortable" sv-root>\n' +
									'	<div class="sortable-container" sv-part="data.items6">\n' +
									'		<div sv-helper class="helper-left">\n' +
									'			custom left helper\n' +
									'		</div>\n' +
									'		<div ng-repeat="item in data.items6" sv-element class="well multi">\n' +
									'			{{item}}\n' +
									'		</div>\n' +
									'	</div>\n' +
									'	<div class="sortable-container" sv-part="data.items7">\n' +
									'		<div ng-repeat="item in data.items7" sv-element class="well multi">\n' +
									'			<div sv-helper class="helper-right">\n' +
									'				custom right helper {{item}}\n' +
									'			</div>\n' +
									'			{{item}}\n' +
									'		</div>\n' +
									'	</div>\n' +
									'</div>';
			$scope.example6Source = '<div class="multi-sortable" sv-root>\n' +
									'	<div class="sortable-container" sv-part="data.items8">\n' +
									'		<div sv-placeholder class="placeholder-left">\n' +
									'			<span>custom left placeholder</span>\n' +
									'		</div>\n' +
									'		<div ng-repeat="item in data.items8" sv-element class="well multi">\n' +
									'			{{item}}\n' +
									'		</div>\n' +
									'	</div>\n' +
									'	<div class="sortable-container" sv-part="data.items9">\n' +
									'		<div ng-repeat="item in data.items9" sv-element class="well multi">\n' +
									'			<div sv-helper class="placeholder-right">\n' +
									'				<span>custom right placeholder {{item}}</span>\n' +
									'			</div>\n' +
									'			{{item}}\n' +
									'	</div>\n' +
									'</div>';
			$scope.aboutExample1 =  '<div sv-root sv-part="modelArray">\n' +
									'	<div ng-repeat="item in modelArray" sv-element>\n' +
									'		<div>{{item}}</div>\n' +
									'	</div>\n' +
									'</div>';
			$scope.aboutExample2 =  '<div sv-root>\n' +
									'	<div sv-part="modelArray1">\n' +
									'		<div ng-repeat="item in modelArray1" sv-element>\n' +
									'			<div>{{item}}</div>\n' +
									'		</div>\n' +
									'	</div>\n' +
									'	<div sv-part="modelArray2">\n' +
									'		<div ng-repeat="item in modelArray2" sv-element>\n' +
									'			<div>{{item}}</div>\n' +
									'		</div>\n' +
									'	</div>\n' +
									'</div>';
			$scope.aboutExample3 =  '<div>\n' +
									'	<div sv-root="someUniqueId" sv-part="modelArray1">\n' +
									'		<div ng-repeat="item in modelArray1" sv-element>\n' +
									'			<div>{{item}}</div>\n' +
									'		</div>\n' +
									'	</div>\n' +
									'	<div sv-root="someUniqueId" sv-part="modelArray2">\n' +
									'		<div ng-repeat="item in modelArray2" sv-element>\n' +
									'			<div>{{item}}</div>\n' +
									'		</div>\n' +
									'	</div>\n' +
									'</div>';
			$scope.aboutExample4 =  '<div sv-root sv-part="modelArray">\n' +
									'	<div ng-repeat="item in modelArray" sv-element>\n' +
									'		<div>{{item}}</div>\n' +
									'		<span sv-handle>handle</span>\n' +
									'	</div>\n' +
									'</div>';
			$scope.aboutExample5 = 	'<div sv-root sv-part="modelArray">\n' +
									'	<div sv-helper>\n' +
									'		custom helper\n' +
									'	</div>\n' +
									'	<div ng-repeat="item in modelArray" sv-element>\n' +
									'		{{item}}\n' +
									'	</div>\n' +
									'</div>\n';
			$scope.aboutExample51 = '<div sv-root sv-part="modelArray">\n' +
									'	<div ng-repeat="item in modelArray" sv-element>\n' +
									'		<div sv-helper>\n' +
									'			custom helper {{item}}\n' +
									'		</div>\n' +
									'		{{item}}\n' +
									'	</div>\n' +
									'</div>\n';
			$scope.aboutExample6 = 	'<div sv-root sv-part="modelArray">\n' +
									'	<div sv-placeholder>\n' +
									'		custom placeholder\n' +
									'	</div>\n' +
									'	<div ng-repeat="item in modelArray" sv-element>\n' +
									'		{{item}}\n' +
									'	</div>\n' +
									'</div>\n';
			$scope.aboutExample61 = '<div sv-root sv-part="modelArray">\n' +
									'	<div ng-repeat="item in modelArray" sv-element>\n' +
									'		<div sv-placeholder>\n' +
									'			custom placeholder {{item}}\n' +
									'		</div>\n' +
									'		{{item}}\n' +
									'	</div>\n' +
									'</div>\n';
		};
        
         
  */