(function(){"use strict";function e(){function u(e,t){this.protocols=t,this.ssl=/(wss)/i.test(this.url)}function a(e,n){return t.push(e),n?new u(e,n):new u(e)}var e=[],t=[],n=[],r=[],i=[],s=[],o=!1;u.prototype.send=function(e){s.push(e)},this.mockSend=function(){if(o)return i.shift()},this.mock=function(){o=!0},this.isMocked=function(){return o},this.isConnected=function(t){return e.indexOf(t)>-1},u.prototype.close=function(){r.push(!0)},this.create=a,this.createWebSocketBackend=a,this.flush=function(){var o,u,a;while(o=t.shift()){var f=e.indexOf(o);f>-1&&e.splice(f,1)}while(r.shift())n.shift();while(u=s.shift()){var l;i.forEach(function(e,t){e.message===u.message&&(l=t)}),l>-1&&i.splice(l,1)}},this.expectConnect=function(t,n){e.push(t)},this.expectClose=function(){n.push(!0)},this.expectSend=function(e){i.push(e)},this.verifyNoOutstandingExpectation=function(){if(e.length||n.length||i.length)throw new Error("Requests waiting to be flushed")},this.verifyNoOutstandingRequest=function(){if(t.length||r.length||s.length)throw new Error("Requests waiting to be processed")}}angular.module("ngWebSocketMock",[]).service("WebSocketBackend",e).service("$websocketBackend",e),angular.module("angular-websocket-mock",["ngWebSocketMock"]),typeof module=="object"&&typeof define!="function"&&(module.exports=angular.module("ngWebSocketMock"))})();