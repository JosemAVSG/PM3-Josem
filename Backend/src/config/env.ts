import 'dotenv/config';

const PORT = process.env.PORT || 3000;
export const  TOKEN_SECRET= process.env.TOKEN_SECRET || 'secret';
export default PORT