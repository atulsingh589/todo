app.service("$loginService",function ($mainService,$q) {
return {
    login:function(data){
        var defer=$q.defer();
        $mainService.call(data,"login").then(function(res){
            defer.resolve(res)
        },function(err){
            defer.reject(err)
        })
        return defer.promise;
    }
}
})