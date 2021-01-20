# CLOTHES STORE

This project was done using HTML, CSS, Sass, React and Javascript.
   Author: julianaquiroz18   

## How to test it?
Clone the repository and follow next steps:

1. Get Mercado Libre new Token
```bash
    curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/x-www-form-urlencoded' \
    'https://api.mercadolibre.com/oauth/token' \
    -d 'grant_type=authorization_code' \
    -d 'client_id=1523441364517935' \
    -d 'client_secret=OBlQJ9wIh8uGPyHfiFYSFW08DuvYdTSQ' \
    -d 'code=TG-6004b08cf1b1f60006a52dea-359798454' \
    -d 'redirect_uri=https://www.mercadolibre.com.co/'
```

2. Install dependencies:
```bash
    npm install
```

2. Preparing enviroment:
```bash
    #Rename file `sample.env` to `.env`
    mv sample.env .env 
    #Modify your .env information 
```

3. Install Back-end dependencies and start server:
```bash
    #Install dependencies
    npm install
    #Initialize data base
    #Note: Admin email and password would be provided  
    node bootstraping.js 
    #Initialize server
    npx nodemon server.js
```

