!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.htm=t()}(this,function(){var e={},t=document.createElement("template"),n=/(\$_h\[\d+\])/g;function r(e,t){var r=e.match(n),i=JSON.stringify(e);if(null!=r){if(r[0]===e)return e;i=i.replace(n,'"'+t+"$1"+t+'"').replace(/"[+,]"/g,""),","==t&&(i="["+i+"]")}return i}return function(n){return(e[n]||(e[n]=function(e){for(var n=e[0],i=1;i<e.length;)n+="$_h["+i+"]"+e[i++];return t.innerHTML=n.replace(/<(?:(\/)\/|(\/?)(\$_h\[\d+\]))/g,"<$1$2c c@=$3").replace(/<([\w:-]+)(?:\s[^<>]*?)?(\/?)>/g,function(e,t,n){return e.replace(/(?:'.*?'|".*?"|([A-Z]))/g,function(e,t){return t?":::"+t:e})+(n?"</"+t+">":"")}).trim(),Function("h","$_h","return "+function e(t){if(1!=t.nodeType)return 3==t.nodeType&&t.data?r(t.data,","):"null";for(var n="",i=r(t.localName,n),u="",a=",({",o=0;o<t.attributes.length;o++){var c=t.attributes[o].name,f=t.attributes[o].value;"c@"==c?i=f:"..."==c.substring(0,3)?(u="",a=",Object.assign({",n+="},"+c.substring(3)+",{"):(n+=u+'"'+c.replace(/:::(\w)/g,function(e,t){return t.toUpperCase()})+'":'+(!f||r(f,"+")),u=",")}n="h("+i+a+n+"})";for(var l=t.firstChild;l;)n+=","+e(l),l=l.nextSibling;return n+")"}((t.content||t).firstChild))}(n)))(this,arguments)}});