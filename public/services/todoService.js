app.service("$todoService",function ($mainService,$q) {
    return {
        list:function(data){
            var defer=$q.defer();
            $mainService.call(data,"todo").then(function(res){
                defer.resolve(res)
            },function(err){
                defer.reject(err)
            })
            return defer.promise;
        },
        add:function(data){
            var defer=$q.defer();
            $mainService.call(data,"todo/add").then(function(res){
                defer.resolve(res)
            },function(err){
                defer.reject(err)
            })
            return defer.promise;
        },
        update:function(data){
            var defer=$q.defer();
            $mainService.call(data,"todo/update").then(function(res){
                defer.resolve(res)
            },function(err){
                defer.reject(err)
            })
            return defer.promise;
        },
        delete:function(data){
            var defer=$q.defer();
            $mainService.call(data,"todo/delete").then(function(res){
                defer.resolve(res)
            },function(err){
                defer.reject(err)
            })
            return defer.promise;
        }
    }
})