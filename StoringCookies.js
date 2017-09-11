/*Storing Cookies
The simplest way to create a cookie is to assign a string value to the document.cookie object, which looks like this.

document.cookie = "key1=value1;key2=value2;expires=date";

Here the expires attribute is optional. If you provide this attribute with a valid date or time, then the cookie will
 expire on a given date or time and thereafter, the cookies' value will not be accessible.

Note − Cookie values may not include semicolons, commas, or whitespace. For this reason, you may want to use the
JavaScript escape() function to encode the value before storing it in the cookie. If you do this, you will also have 
to use the corresponding unescape() function when you read the cookie value.

Example
Try the following. It sets a customer name in an input cookie.*/

<html>
   <head>
      
      <script type = "text/javascript">
         <!--
            function WriteCookie()
            {
               if( document.myform.customer.value == "" ){
                  alert("Enter some value!");
                  return;
               }
               cookievalue= escape(document.myform.customer.value) + ";";
               document.cookie="name=" + cookievalue;
               document.write ("Setting Cookies : " + "name=" + cookievalue );
            }
         //-->
      </script>
      
   </head>
   
   <body>
   
      <form name="myform" action="">
         Enter name: <input type="text" name="customer"/>
         <input type="button" value="Set Cookie" onclick="WriteCookie();"/>
      </form>
   
   </body>
</html>