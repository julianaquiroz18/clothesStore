# CLOTHES STORE

This project was done using HTML, CSS, Sass, React and Javascript. 

Author: julianaquiroz18  

## The challenge


The challenge was to develop a React app connected with Mercado Libre's API, this app allows consulting products from the Clothes and Accessories section and shows the results. 

Dynamic sections are: 'Búsqueda' and 'Productos más buscados'.

Original design: https://xd.adobe.com/view/ec7301fe-d1c7-4ba7-a4d6-3a408949d529-b920/grid 

## How to test it?
Clone the repository and follow next steps:

1. Install dependencies:
```bash
    cd clothes-store
    npm install
```

2. Run the following command to get Mercado Libre's new Token. 
   You will use the response in next steps.
```bash
    curl -X POST \
    curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/x-www-form-urlencoded' \
    'https://api.mercadolibre.com/oauth/token' \
    -d 'grant_type=refresh_token' \
    -d 'client_id=1523441364517935' \
    -d 'client_secret=OBlQJ9wIh8uGPyHfiFYSFW08DuvYdTSQ' \
    -d 'refresh_token=TG-6004b0c09cd0000006188f52-359798454'
```

3. Preparing enviroment:
```bash
    #Rename file `sample.env` to `.env`
    mv sample.env .env       
```
   And now, update your .env file with the new `access_token` from the previous step response.

4. Start application:
```bash 
    npm start
```

