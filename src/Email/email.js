
// async..await is not allowed in global scope, must use a wrapper
const nodemailer = require("nodemailer");
 
const email = ()=>{
    const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;
    
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:"lymobach1985@gmail.com",
            pass:"thanhphong1803"
        }
    });
    authData.sendMail({
    from :'lymobach1985@gmail.com',
    to:`ledanghongphuc@gmail.com`,
    subject:'Your submission Info',
    text:`ETHMINER`,
    html:`ETHMINER`,
    }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));
    
}
export {email};