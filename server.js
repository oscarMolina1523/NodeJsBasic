/*import express from 'express';
import admin from 'firebase-admin';
import credentials from './key.json';*/
const express = require('express');
const admin = require('firebase-admin');
const credentials = require('./key.json');

const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 8080;

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

app.get("/getAll", async (req, res)=>{
    try{

        const usersRef=db.collection("users");
        const response= await usersRef.get();
        let responseArr=[];
        response.forEach(doc=>{
            responseArr.push(doc.data());
        });

        res.send(responseArr);
    }catch(error){
        console.log(error);
    }
});

app.get("/get/:id", async (req, res)=>{
    try{
        const usersRef=db.collection("users").doc(req.params.id);
        const response= await usersRef.get();
        res.send(response.data());
    }catch(error){
        console.log(error)
        
    }

})

app.post("/create", async (req, res)=>{
    try{
        
        const userJson= {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };

        const response=await db.collection("users").add(userJson);
        res.send(response);
    }catch(error){
        res.send("error to create an user")
    }
})

app.post("/update", async (req, res)=>{
    try{
        const id=req.body.id;
        const newFirstName="Anything";
        const userJson= {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };

        const response=await db.collection("users").doc(id).update({
            firstName: newFirstName,
        });
        res.send(response);
    }catch(error){
        res.send("error to create an user")
    }
})

app.delete("/delete/:id", async (req, res)=>{
    try{
        const response=await db.collection("users").doc(req.params.id).delete();
        res.send(response);
    }catch(error){
        console.log(error)
    }
})

const db= admin.firestore()
app.listen(PORT, ()=>{
    console.log(`the server is runing in the ${PORT}`)
})
