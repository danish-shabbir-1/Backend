import jwt from 'jsonwebtoken'
import jwtSecret from '../config/jwt.mjs'


async function verifyToken(req,res, next) {
    
    const token = req.headers.authorization?.slice(7);

    if (!token) {
        return res.status(401).send({ message: "No access!" });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);

        // Check if the token's signature is valid but not necessarily if it exists in the database
        req.userId = decoded.uid;
        req.tokenToRemove = token;

        next();
    } catch (e) {
        // Handle invalid token or token expiration
        return res.status(401).send({ message: "Invalid token!" });
    }
}

export default verifyToken;