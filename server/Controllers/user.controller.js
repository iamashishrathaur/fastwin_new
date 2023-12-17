
const userService = require('../Services/user.service');

const createUserController = async (req, res) => {
  try {
    if (!req.body.mobile || !req.body.password) {
      return res.status(400).json({ error: 'Bad Request - Missing required fields' });
    }
    const newData = await userService.createUser(req.body.mobile, req.body.password);
       return res.status(201).json(newData);
  } catch (error) {
    console.error('Error in createUserController:', error.message);
     return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const findUserController=async(req,res)=>{
   try{
    const response = await userService.findUser(req.body.mobile);
   if(!response){
    return res.status(500).json({error: 'Internal Server Error'})
   }
   if(response.password!=req.body.password){
     return res.status(500).json({error: 'Wrong Password'})
   }
     return res.status(200).json({data:response})
   }catch(err){
    return res.status(500).json({error: `Error fetching user:${err}`})
   }
}

module.exports = { createUserController,findUserController };
