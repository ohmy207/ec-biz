define(["require","exports","module","../module","text!page/app/home.html"],function(e,t,n){var n=e("../module");n.config(["$stateProvider",function(t){t.state("app",{url:"/app","abstract":!0}).state("app.home",{url:"/home",views:{screen:{template:e("text!page/app/home.html"),controller:function(e){e.today=function(){e.dt=new Date},e.today(),e.clear=function(){e.dt=null},e.open=function(t){t.preventDefault(),t.stopPropagation(),e.opened=!0},e.disabled=function(e,t){return t==="day"&&(e.getDay()===0||e.getDay()===6)},e.toggleMin=function(){e.minDate=e.minDate?null:new Date},e.toggleMin(),e.dateOptions={formatYear:"yy",startingDay:1},e.formats=["dd-MMMM-yyyy","yyy/MM/dd","dd.MM.yyyy","shortDate"],e.format=e.formats[0],e.totalItems=64,e.currentPage=4,e.setPage=function(t){e.currentPage=t},e.pageChanged=function(){$log.log("Page changed to: "+e.currentPage)},e.maxSize=5,e.bigTotalItems=175,e.bigCurrentPage=1}}}}).state("app.external",{url:"/external/{url:.*}",views:{screen:{controller:function(e,t,n,r){if(!t.params.url){t.go("app.external",{url:"https://www.tmall.com/"});return}r.isCollapsed=!0,e.$on("$destroy",function(e){r.isCollapsed=0}),e.url=n.url}}}})}])});