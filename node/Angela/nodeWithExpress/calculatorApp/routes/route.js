const express = require('express');
const app = express();

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index');
});

router.post('/result', (req, res, next) => {
    const firstNumber = parseInt(req.body.firstNumber);
    const secondNumber = parseInt(req.body.secondNumber);
    const result = firstNumber + secondNumber;
    
    res.render('result', { result });
});

module.exports = router;