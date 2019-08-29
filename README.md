# SpotaRoom

This project is using the following:

### Server
    - Node with Express
    - REST API

### Frontend
    - React
    - Bootstrap
    
## How to run locally

You have one a few options:

    - To run server and frontend in production mode mode ensure you are in the root of the folder and run 'npm start'
    - To run server and frontend in development mode mode ensure you are in the root of the folder and run 'npm run dev' 
    - To run the server locally cd to the project and run 'npm run dev', this will also have nodemon running 
    - To run the frontend locally cd to the project and run 'npm start'.

## How To Build
    
    - To build the frontend run 'npm run build', this will produce a minifed bundle for production use
    
## Decisions

### Server

    The server is making use of a lot of middleware for its routes, the basic reason I have taken this approach
    is that there is the concept of a handler, its just middleware, just what it does is specific to a route, where as 
    other middleware can be reused. So the handler has the oppurtunity to add any extra information onto a request. As an example
    in the homecards router it is building up an API endpoint in order to talk to another API integration.
    
    This also abstracts complex logic into middleware and keeps the route itself more clean and is just responsible
    for passing the result down.

    There is also on the markers endpoint the option to pass in a query param for limit or if you only wish to see ID's and get back the 
    room data. This I have just set for 30 but is overidable in the request just so it does not have to loop over all 4000+ items when mapping. As well
    as I have set it to only return ID's so that you can choose if you want to just have specific data returned to the frontend.
    
### Frontend
    I have only used new React Hooks, there is not much state managment needed
    however for what there is these have been handled as such.