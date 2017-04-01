'use strict';

const exp = require('express');
const app = exp();

app.use(exp.static('public'));
app.listen(5555); // 5555 is a port number, there are other famous port numbers