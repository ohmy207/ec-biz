define(["require","er/Model","er/datasource","common/ejson","biz/getQuery","biz/url","er/util"],function(e){function u(){var e=this;t.apply(e,arguments);var r=e.get("keyword"),s=i();e.datasource=[{retrieve:n.remote("/temai-biz/idea/search",{method:"GET",data:{key:r,pageNum:s.pageNum,pageSize:s.pageSize}}),dump:1}]}var t=e("er/Model"),n=e("er/datasource"),r=e("common/ejson"),i=e("biz/getQuery"),s=e("biz/url"),o=e("er/util");return o.inherits(u,t),o.mix(u.prototype,{prepare:function(){var e=this;t.prototype.prepare.apply(e,arguments);var n=e.get("data");typeof n.list=="undefined"&&(n.list=[]),e.set("data",n),e.set("total",n.totalNum)}}),u});