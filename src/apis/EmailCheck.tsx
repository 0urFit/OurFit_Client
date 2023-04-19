import axios from 'axios';

const EmailCheck = async (email: string) => {
    const URL = `http://www.ourfit.shop/checknick/${email}`;

    try {
        const response = await axios.get(URL);

        return response;
    } catch (e) {
        console.log(e);
    }
};

export default EmailCheck;
