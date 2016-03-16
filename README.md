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
      })(window,document,"script","//cdn.sputlytics.com/agent.js","spa");

      spa("init", {domain: "https://myweb.site", clientKey: "clientKey"});
      spa("pageview");
    </script>
  </body>
</html>
```

## About

Caio Ribeiro Pereira  
Lucas N. Munhoz

## License

The MIT License (MIT)

Copyright (c) 2016 Sputlytics

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
