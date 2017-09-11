/*Syntax
for (variablename in object){
   statement or block to execute
}
In each iteration, one property from object is assigned to variablename and this loop continues till all the properties of the object are exhausted.

Example
Try the following example to implement ‘for-in’ loop. It prints the web browser’s Navigator object.*/

<html>
   <body>
      
      <script type="text/javascript">
         <!--
            var aProperty;
            document.write("Navigator Object Properties<br /> ");
         
            for (aProperty in navigator) {
               document.write(aProperty);
               document.write("<br />");
            }
            document.write ("Exiting from the loop!");
         //-->
      </script>
      
      <p>Set the variable to different object and then try...</p>
   </body>
</html>