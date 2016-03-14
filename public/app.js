(function(){

        angular.module('app',[])
            .controller('c1',['$scope','$http',function($scope,$http){
                var getC1 = function(){
                    return $http.get('/api/c1').then(function(data){
                        $scope.c1s = data.data;
                        $scope.button.submit = false;
                        $scope.button.update = true;
                    });
                }

                $scope.button = {};
                $scope.addC1 = function(c1){
                    $http.post('/api/c1',c1).then(function(data){
                        $scope.c1s.push(data.data);
                    });
                }

                $scope.delC1 = function(c1){
                    $http.delete('/api/c1/'+c1._id).then(function(data){
                        console.log(data.data);
                        $scope.c1s = _.without($scope.c1s,c1);
                    }, function(data){
                        console.log(data);
                    });
                }

                $scope.select = function(c1){
                    $scope.nc1 = _.clone(c1);
                    $scope.button.submit = true;
                    $scope.button.update = false;
                }

                $scope.updateC1 = function(c1){
                    $http.put('/api/c1/'+c1._id, $scope.nc1).then(function(data){
                        console.log(data.data);
                        $scope.button.submit = false;
                        $scope.button.update = true;
                        _.find($scope.c1s,function(obj){return obj._id==c1._id;}).firstName = $scope.nc1.firstName;
                        _.find($scope.c1s,function(obj){return obj._id==c1._id;}).lastName = $scope.nc1.lastName;
                        _.find($scope.c1s,function(obj){return obj._id==c1._id;}).email = $scope.nc1.email;
                    });
                }
                getC1();
            }]);
})();
