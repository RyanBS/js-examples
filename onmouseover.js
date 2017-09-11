/*onmouseover and onmouseout
These two event types will help you create nice effects with images or even with text as well. 
The onmouseover event triggers when you bring your mouse over any element and the onmouseout 
triggers when you move your mouse out from that element. Try the following example.*/

<html>
   <head>
   
      <script type="text/javascript">
         <!--
            function over() {
               document.write ("Mouse Over");
            }
            
            function out() {
               document.write ("Mouse Out");
            }
            
         //-->
      </script>
      
   </head>
   <body>
      <p>Bring your mouse inside the division to see the result:</p>
      
      <div onmouseover="over()" onmouseout="out()">
         <h2> This is inside the division </h2>
      </div>
         
   </body>
</html>