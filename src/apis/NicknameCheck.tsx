import axios from 'axios';

const NicknameCheck = async (nickname: string) => {
    const URL = `https://www.ourfit.shop/checknick/${nickname}`;

    try {
        const response = await axios.get(URL);

        return response;
    } catch (e) {
        console.log(e);
    }
};

export default NicknameCheck;
