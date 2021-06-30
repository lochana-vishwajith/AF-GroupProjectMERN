const Payments = require('./PaymentModel');

const Pay = async (req,res)=>{
    try {
        const payObj = req.body;
        const payO = new Payments(payObj);
        const result = await payO.save();
        res.status(202).send(true);
    }catch (e) {
        console.log(e.message);
        res.status(402).send(true);
    }

}
module.exports ={Pay}