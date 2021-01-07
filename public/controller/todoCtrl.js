app.controller("todoCtrl",function($scope,$todoService,$localStorage){
    if(!$localStorage.hasOwnProperty('user'))
    {
        location.href="#/"
    }
    $scope.todo={};
    $scope.todolist=[];
    console.log($localStorage)

    $scope.getList=function(){
        var data={uid:$localStorage.user.id}
        $todoService.list(data).then(function(res){
            $scope.todolist=res.data
        },function(err){
            $scope.error=err
        })
    }
    $scope.getList();
    $scope.add=function(){
        var data=$scope.todo;
        data.uid=$localStorage.user.id;
        $todoService.add(data).then(function(res){
            $scope.todo={};
            $scope.getList();
        },function(err){
            $scope.error=err
        })
    }
    $scope.delete=function(id){
        var data={id:id}
        $todoService.delete(data).then(function(res){
            $scope.getList();
        },function(err){
            $scope.error=err
        })
    }
    $scope.update=function(){
        var data=$scope.todo;
        data.uid=$localStorage.user.id;
        $todoService.update(data).then(function(res){
            $scope.todo={};
            $scope.getList();
        },function(err){
            $scope.error=err
        })
    }
    $scope.edit=function(todo){
        $scope.todo=Object.assign({},todo);
    }
    $scope.logout=function(){
        delete $localStorage.user;
        location.href="#/";
    }


})