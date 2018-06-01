(() => {
    let app = angular.module('kolkokrzyzyk', []);
    app.controller('main', ['$scope', '$interval', '$sce', ($scope, $interval, $sce) => {

        $scope.x = 0;
        $scope.y = 0;
        $scope.draw = false;

        $scope.x1y1 = {
            value: '&nbsp;'
        };
        $scope.x1y2 = {
            value: '&nbsp;'
        };
        $scope.x1y3 = {
            value: '&nbsp;'
        };

        $scope.x2y1 = {
            value: '&nbsp;'
        };
        $scope.x2y2 = {
            value: '&nbsp;'
        };
        $scope.x2y3 = {
            value: '&nbsp;'
        };

        $scope.x3y1 = {
            value: '&nbsp;'
        };
        $scope.x3y2 = {
            value: '&nbsp;'
        };
        $scope.x3y3 = {
            value: '&nbsp;'
        };
        $scope.current = 'X';

        $scope.gameRunning = true;

        $scope.fill = (x, y) => {
            if(!$scope.gameRunning){
                return false;
            }
            if(x == 1){
                if(y == 1){
                    if($scope.x1y1.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x1y1.value = $scope.current;
                    if(($scope.x1y2.value == $scope.current && $scope.x1y3.value == $scope.current) || ($scope.x2y2.value == $scope.current && $scope.x3y3.value == $scope.current) || ($scope.x2y1.value == $scope.current && $scope.x3y1.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x1y2.value == $scope.current && $scope.x1y3.value == $scope.current){
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.x1y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x2y2.value == $scope.current && $scope.x3y3.value == $scope.current){
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else{
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x2y1.style = 'w3-text-green';
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }else if(y == 2){
                    if($scope.x1y2.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x1y2.value  = $scope.current;
                    if(($scope.x1y1.value == $scope.current && $scope.x1y3.value == $scope.current) || ($scope.x2y2.value == $scope.current && $scope.x3y2.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x1y2.value == $scope.current && $scope.x1y3.value == $scope.current){
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.x1y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else{
                            $scope.x1y2.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }else{
                    if($scope.x1y3.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x1y3.value  = $scope.current;
                    if(($scope.x1y2.value == $scope.current && $scope.x1y1.value == $scope.current) || ($scope.x2y2.value == $scope.current && $scope.x3y1.value == $scope.current) || ($scope.x2y3.value == $scope.current && $scope.x3y3.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x1y2.value == $scope.current && $scope.x1y1.value == $scope.current){
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.x1y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x2y2.value == $scope.current && $scope.x3y1.value == $scope.current){
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else{
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.x2y3.style = 'w3-text-green';
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }
            }else if(x == 2){
                if(y == 1){
                    if($scope.x2y1.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x2y1.value  = $scope.current;
                    if(($scope.x2y2.value == $scope.current && $scope.x2y3.value == $scope.current) || ($scope.x1y1.value == $scope.current && $scope.x3y1.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x2y2.value == $scope.current && $scope.x2y3.value == $scope.current){
                            $scope.x2y1.style = 'w3-text-green';
                            $scope.x2y3.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x1y1.value == $scope.current && $scope.x3y1.value == $scope.current){
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x2y1.style = 'w3-text-green';
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }else if(y == 2){
                    if($scope.x2y2.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x2y2.value  = $scope.current;
                    if(($scope.x1y2.value == $scope.current && $scope.x3y2.value == $scope.current) || ($scope.x1y2.value == $scope.current && $scope.x3y2.value == $scope.current) || ($scope.x1y1.value == $scope.current && $scope.x3y3.value == $scope.current) || ($scope.x1y3.value == $scope.current && $scope.x3y1.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x1y2.value == $scope.current && $scope.x3y2.value == $scope.current){
                            $scope.x1y2.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x1y2.value == $scope.current && $scope.x3y2.value == $scope.current){
                            $scope.x1y2.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x1y1.value == $scope.current && $scope.x3y3.value == $scope.current){
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else{
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                        }
                    }
                }else{
                    if($scope.x2y3.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x2y3.value  = $scope.current;
                    if(($scope.x2y2.value == $scope.current && $scope.x2y1.value == $scope.current) || ($scope.x1y3.value == $scope.current && $scope.x3y3.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x2y2.value == $scope.current && $scope.x2y1.value == $scope.current){
                            $scope.x2y1.style = 'w3-text-green';
                            $scope.x2y3.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x1y3.value == $scope.current && $scope.x3y3.value == $scope.current){
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.x2y3.style = 'w3-text-green';
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }
            }else{
                if(y == 1){
                    if($scope.x3y1.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x3y1.value  = $scope.current;
                    if(($scope.x1y1.value == $scope.current && $scope.x2y1.value == $scope.current) || ($scope.x3y2.value == $scope.current && $scope.x3y3.value == $scope.current) || ($scope.x2y2.value == $scope.current && $scope.x1y3.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x1y1.value == $scope.current && $scope.x2y1.value == $scope.current){
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x2y1.style = 'w3-text-green';
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x3y2.value == $scope.current && $scope.x3y3.value == $scope.current){
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.x3y2.style = 'w3-text-green';
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else{
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }else if(y == 2){
                    if($scope.x3y2.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x3y2.value  = $scope.current;
                    if(($scope.x3y1.value == $scope.current && $scope.x3y3.value == $scope.current) || ($scope.x1y2.value == $scope.current && $scope.x2y2.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x3y1.value == $scope.current && $scope.x3y3.value == $scope.current){
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.x3y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else{
                            $scope.x1y2.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y2.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }else{
                    if($scope.x3y3.value != '&nbsp;'){
                        return false;
                    }
                    $scope.x3y3.value  = $scope.current;
                    if(($scope.x1y3.value == $scope.current && $scope.x2y3.value == $scope.current) || ($scope.x3y2.value == $scope.current && $scope.x3y1.value == $scope.current) || ($scope.x2y2.value == $scope.current && $scope.x1y1.value == $scope.current)){
                        $scope.gameRunning = false;
                        if($scope.x1y3.value == $scope.current && $scope.x2y3.value == $scope.current){
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.x2y3.style = 'w3-text-green';
                            $scope.x1y3.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else if($scope.x3y2.value == $scope.current && $scope.x3y1.value == $scope.current){
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.x3y2.style = 'w3-text-green';
                            $scope.x3y1.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }else{
                            $scope.x1y1.style = 'w3-text-green';
                            $scope.x2y2.style = 'w3-text-green';
                            $scope.x3y3.style = 'w3-text-green';
                            $scope.lastWinner = $scope.current;
                            return false;
                        }
                    }
                }
            }

            if($scope.current == 'X'){
                $scope.current = '0';
            }else{
                $scope.current = 'X';
            }

            if($scope.x1y1.value != '&nbsp;' && $scope.x1y2.value != '&nbsp;' && $scope.x1y3.value != '&nbsp;' && $scope.x2y1.value != '&nbsp;' && $scope.x2y2.value != '&nbsp;' && $scope.x2y3.value != '&nbsp;' && $scope.x3y1.value != '&nbsp;' && $scope.x3y2.value != '&nbsp;' && $scope.x3y3.value != '&nbsp;'){
                $scope.gameRunning = false;
                $scope.draw = true;
            }

        };

        $scope.reset = () => {

            $scope.draw = false;

            $scope.x1y1 = {
                value: '&nbsp;'
            };
            $scope.x1y2 = {
                value: '&nbsp;'
            };
            $scope.x1y3 = {
                value: '&nbsp;'
            };
    
            $scope.x2y1 = {
                value: '&nbsp;'
            };
            $scope.x2y2 = {
                value: '&nbsp;'
            };
            $scope.x2y3 = {
                value: '&nbsp;'
            };
    
            $scope.x3y1 = {
                value: '&nbsp;'
            };
            $scope.x3y2 = {
                value: '&nbsp;'
            };
            $scope.x3y3 = {
                value: '&nbsp;'
            };
            $scope.current = 'X';
    
            $scope.gameRunning = true;
        };


        $scope.$watch('lastWinner', (oldVal, newVal) => {
            if(oldVal == 'X'){
                $scope.x++;
            }else if(oldVal == '0'){
                $scope.y++;
            }

            $scope.lastWinner = undefined;
        });

    }]);
    app.filter('safe', $sce => {
        return $sce.trustAsHtml;
    });
})()