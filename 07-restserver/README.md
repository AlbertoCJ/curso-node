
Instalar mongoDB.
npm i -g nodemon

npm i express --save
npm i body-parser --save 
npm i mongoose --save
npm i mongoose-unique-validator --save
npm i bcrypt --save
npm i underscore --save
npm i jsonwebtoken --save

npm install google-auth-library --save


tip postman:
En seccion test (Params, Headers, etc)

let resp = pm.response.json();
if (resp.ok) {
    let token = resp.token;
    pm.environment.set("token", token);   
} else {
    console.log('No se actualizó el token');
}