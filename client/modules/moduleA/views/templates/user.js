/*TMODJS:{"version":2,"md5":"d57cc823042d696279605f3168ee1e1f"}*/
var template=require("../../../template");require("./userlist"),module.exports=template("moduleA/views/templates/user",function(a,b){"use strict";var c=this,d=(c.$helpers,c.$escape),e=a.title,f=function(d,e){e=e||a;var f=c.$include(d,e,b);return g+=f},g="";return g+="<h1>\u7528\u62371: ",g+=d(e),g+="</h1> ",f("./userlist"),new String(g)});