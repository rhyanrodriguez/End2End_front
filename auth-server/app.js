const express = require('express')
const bcrypt = require('bcrypt')
var cors = require('cors')
const jwt = require('jsonwebtoken')
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('./database.json')
var db = low(adapter)

// Initialize Express app
const app = express()
const jwtSecretKey = 'dsfdsfsdfdsvcsvdfgefg'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))