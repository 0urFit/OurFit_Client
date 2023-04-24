import { InputType } from '@/components/signup/type';
import axios from 'axios';

const SignUpSubmit = async (data: InputType) => {
    const URL = 'https://www.ourfit.shop/signup';

    try {
        const response = await axios.post(URL, {
            email: data.email,
            password: data.password,
            nickname: data.nickname,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            squat: data.squat,
            benchpress: data.benchpress,
            deadlift: data.deadlift,
            overheadPress: data.overheadPress,
        });

        return response;
    } catch (e) {
        console.log(e);
    }
};

export default SignUpSubmit;
