const users = [{name:'muiz'}];

module.exports.login = (req,res) =>{
   console.log(req.body);
   res.send("form submit");


}