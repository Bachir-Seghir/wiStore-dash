# WiStore Dashboard  - Frontend Part

WiStore Dashboard is created with [Create React App](https://github.com/facebook/create-react-app).

This dashboard can manage all the content of the client side : 

### Users
### Products
### Stats
### SHADOW CRUD

## Libraries used

* Styled-components for React which allows to use component-level styles in our applications for building custom user interfaces.

* Redux ToolKit which includes several utility functions that simplify the most common Redux use cases, including store setup, 
  defining reducers, immutable update logic, and even creating entire "slices" of state at once.
  
* Firebase for authentication and firecloud for image upload.

* REST API using axios for HTTP Requests

## Installaiom

First of all, clone the repository into your machine :

```sh
git clone https://github.com/Bachir-Seghir/wiStore-dash.git
```

In the project directory install all dependencies,run:

```sh
npm install
```

In the project directory, start the server : 

```sh
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## API Server :
Backend part is hosted on Heroku https://wistore-server.herokuapp.com/api/
and puted by default in as api url in .env file 

If you want to customize the backend, clone it via :

```sh
git clone https://github.com/Bachir-Seghir/REST-API.git
```

and make sure to install dependencies ; 

```sh
npm install
```

* Update the api url in your .env file  
REACT_APP_API_SERVER_URL=YOUR_API_URL 

save it and run : 

```sh 
npm run dev
```


## Build 

```sh
npm run build
```

Builds the app for production to the ```build``` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



### Deployment

You can deploy the app on Netlify or Heroku. 

