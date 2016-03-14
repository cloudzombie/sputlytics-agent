# Sputlytics agent

Sputlytics agent is a client-side script responsible to catch browser's data.

## Setup

To use this script, put the script below into your website:

``` html
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <script>    
      (function(s,p,u,t,n,i,k){
      s['Sputlytics']=n;s[n]=s[n]||function(){(s[n].q=s[n].q||[]).push(arguments)},
      i=p.createElement(u);k=p.getElementsByTagName(u)[0];i.async=1;i.src=t;k.parentNode.insertBefore(i,k)
      })(window,document,"script","//sputlytics.com/agent.js","spa");

      spa("init", {domain: "https://myweb.site", clientKey: "clientKey"});
      spa("pageview");
    </script>
  </body>
</html>
```
