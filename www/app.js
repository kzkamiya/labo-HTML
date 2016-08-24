ons.ready(function () {
    console.log("Onsen UI is ready!?");
});

var app = angular.module('app', ['onsen', 'textAngular', 'dndLists']);

app.controller('AppController', [
    '$scope',
    function ($scope) {
        $scope.models = {
            selected: null,
            lists: { "A": [], "B": [] }
        };

        for (var i = 1; i <= 3; ++i) {
            $scope.models.lists.A.push({ label: "Item A" + i });
            $scope.models.lists.B.push({ label: "Item B" + i });
        }

        $scope.$watch('models', function (model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);

        $scope.load = function (page) {
            $scope.mySplitterContent.load(page);
        };
        $scope.open = function () {
            $scope.mySplitterSide.open();
        };
        $scope.close = function () {
            $scope.mySplitterSide.close();
        };
    }
]);
