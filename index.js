// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

// respond with "hello world" when a GET request is made to the homepage
// app.get("/", function(req, res) {
//   res.send("hello world");
// });

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on:http//localhost:${PORT}`);

const handleHome = (req, res) =>
  //   console.log("Hi form Home");
  //   console.log(req);
  res.send("Home");
const handleAboutUs = (req, res) => res.send("About Us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected");

// 미들웨어 기본연습
const betweenHome = (req, res, next) => {
  console.log("i am a middleware");
  next();
};
app.use(betweenHome);

app.use(bodyParser());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("combined"));

app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", handleProtected);

app.listen(PORT, handleListening);
