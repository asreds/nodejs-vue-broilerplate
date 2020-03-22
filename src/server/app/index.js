#!/usr/bin/env node

import express from "express"
import path from "path"
import render from "./render"
import session from "cookie-session"
import cookieParser from "cookie-parser"
import { notFound } from "./middlewares/error"

const app = express()
let staticOptions = {}

if (process.env.NODE_ENV == "production") {
  staticOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30, //default cache max age is 1 month
    eTag: false
  }
}

app.disabled("x-powered-by")

// session middleware
app.use(cookieParser())
app.use(
  session({
    name: "dekogo-web-front",
    keys: [process.env.APP_KEY || "dekogo-web", "dekogo.com"],
    maxAge: 1000 * 60 * 60 * 24 * 30 //1 month
  })
)

// routes
app.use(
  "/favicon.ico",
  express.static(path.resolve(`${__dirname}/../../../assets/favicon.ico`)),
  notFound
)
app.use(
  "/assets",
  express.static(path.resolve(`${__dirname}/../../../assets`), staticOptions),
  notFound
)
app.use("/", render)

export default app
