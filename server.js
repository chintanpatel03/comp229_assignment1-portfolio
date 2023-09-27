// created by Chintan Patel at 20230927 11:00.
//
// Student ID - 301361215

// #!/usr/bin/env node

/**
 * Module dependencies.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
module.exports = app;
