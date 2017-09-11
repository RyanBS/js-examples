/*Reading Cookies
Reading a cookie is just as simple as writing one, because the value of the document.cookie object is the cookie. 
So you can use this string whenever you want to access the cookie. The document.cookie string will keep a list of 
name=value pairs separated by semicolons, where name is the name of a cookie and value is its string value.

You can use strings' split() function to break a string into key and values as follows −

Example
Try the following example to get all the cookies.*/

<html>
   <head>
   
      <script type="text/javascript">
         <!--
            function ReadCookie()
            {
               var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );
               
               // Get all the cookies pairs in an array
               cookiearray = allcookies.split(';');
               
               // Now take key value pair out of this array
               for(var i=0; i<cookiearray.length; i++){
                  name = cookiearray[i].split('=')[0];
                  value = cookiearray[i].split('=')[1];
                  document.write ("Key is : " + name + " and Value is : " + value);
               }
            }
         //-->
      </script>
      
   </head>
   <body>
      
      <form name="myform" action="">
         <p> click the following button and see the result:</p>
         <input type="button" value="Get Cookie" onclick="ReadCookie()"/>
      </form>
      
   </body>
</html>