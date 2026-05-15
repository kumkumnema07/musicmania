import jwt from "jsonwebtoken";

const ensureAuth = (req, res, next) => {

  try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not Authorized, token missing."
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid or expired token."
    });

  }

};

export default ensureAuth;



// import jwt from "jsonwebtoken";

// export const ensureAuth = async (req, res, next) => {

//   try {

//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {

//       return res.status(401).json({
//         message: "Not Authorized, token missing."
//       });

//     }

//     const token = authHeader.split(" ")[1];

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     );

//     req.user = decoded;

//     next();

//   } catch (error) {

//     return res.status(401).json({
//       message: "Invalid or expired token."
//     });

//   }

// };