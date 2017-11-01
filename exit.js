function exitApp(){
	api.addEventListener({
	    name: 'keyback'
	}, function(ret, err) {
		api.toast({
		    msg: '再按一次退出应用',
		    duration: 2000,
		    location: 'bottom'
		});
		api.addEventListener({
		    name: 'keyback'
		}, function(ret, err) {
			api.closeWidget({
                id: 'A6054797274762',
                retData: {
                    name: 'closeWidget'
                },
                silent:true,
                animation: {
                    type: 'flip',
                    subType: 'from_bottom',
                    duration: 500
                }
            });
		});
		setTimeout(function(){
            exitApp();
        },3000)
	});
}



function exitApp(){
      api.addEventListener({
          name: 'keyback'
      }, function(ret, err) {
        api.closeWidget({
          id: 'A6054797274762',
          retData: {
            name: 'closeWidget'
          },
          animation: {
              type: 'flip',
              subType: 'from_bottom',
              duration: 500
          }
        });
      });
    }