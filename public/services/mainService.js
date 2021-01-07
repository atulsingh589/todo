app.service("$mainService",function ($http,$q,$constant) {
return {
    call:function(data,url)
    {
        var defer=$q.defer();
        var request=angular.toJson(data);
        $http({
            url:$constant.url+url,
            data:request,
            method:"POST",
            headers:{},
        }).then(function(resp){
            defer.resolve(resp)
        },function(err){
            defer.reject(err)
        }).catch(function(error){
            defer.reject(error)
        });
       return defer.promise;
    }
}
})