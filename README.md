# node version-v12.17.0
step 1: install node

step 2: open this folder in terminal

step 3: run the code using cmd
      :node index.js

step 4:open browser and paste the url for get operation:
      :http://localhost:4444/concat?firstName={value}&lastName={value}

      : //firstName and lastName  are parameters

step 5:open postman and pass post url:
      :http://localhost:4444/concat/new
      :In header, pass content type
       Content-Type:application/json

       post body
       {
       firstName: ""Tony"",
       lastName: ""Stark""
                       
       }


