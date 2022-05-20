const express= require("express");
const path = require("path");
const app= express();
const PORT=8080;
const pathStatic = path.resolve(__dirname, "./Public");

// ************ Para usar Post ************
app.use(express.urlencoded({extended:false}));

app.use(express.json());


app.use(express.static(pathStatic));
const productsRoutes = require('./Public/routes/productsRoutes');
app.use('/api/products' ,productsRoutes);
app
.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
.on('error',error=>console.log(`error del servidor:${error}`))