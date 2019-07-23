const path = require('path');

const fs = require('fs');

const handelhome = require('./handlers/handelHome')

const router = (req, res) => {
    const endpoint = req.url;
    const arrayPath = endpoint.split('/');
    const ext = endpoint.split('.')[1];
    const extType = {
        html: 'text/html',
        css: 'text/css',
        jpg: 'image/jpg',
        ico: 'image/x-icon',
        png:'image/png',
        js: 'application/javascript',
    }
    console.log(endpoint)
    if(endpoint === '/'){
        handelhome(res)
    }else {

    }
    

}

module.exports = router;
