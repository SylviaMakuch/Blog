import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
//middle ware first authorizes the user to do other controls, this will then go to Routes
//   const token = req.headers.authroization.split()[1]; ==> we need to validate that the user has a token, and the token exists on the first postion of the array
//decodedData = jwt.verify(token, secret); ==> this will give us the usernamea nd the id of the user, so this will give us the id who is liking the post/deleting
//secret is the password
//  req.userId= decodedData?.id; is when we will be using our own token, <500
//     decodedData= jwt.decode(token) is the json webtoken, we will not need the password to this
//req.userId= decodedData?.sub= sub is googles token
