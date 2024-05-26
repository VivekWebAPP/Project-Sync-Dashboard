import jwt from 'jsonwebtoken';

const findToken = async (req, res, next) => {
    try {
        const token = req.header('auth-token') || req.header('Auth-Token');
        if (!token) {
            return res.status(400).send('Permission Denied');
        }

        const secret = "VivekKLEStudent";
        
        try {
            const jwtToken = jwt.verify(token, secret);
            req.user = jwtToken.user.userId;
            next();
        } catch (err) {
            console.error('Token verification failed:', err.message);
            return res.status(400).send('Invalid token');
        }

    } catch (error) {
        console.error('Internal Error Occurred:', error);
        return res.status(500).send('Internal Error Occurred');
    }
};

export default findToken;
