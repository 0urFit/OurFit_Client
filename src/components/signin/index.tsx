import SubmitButton from '@/common/molecules/SubmitButton';
import { SI } from './style';
import InfoInput from '@/common/molecules/InfoInput';
import { ItemType } from './type';

const SigninData: ItemType[] = [
    { id: 0, inputKor: '이메일', inputEng: 'Email', essential: true },
    { id: 1, inputKor: '비밀번호', inputEng: 'Password', essential: true },
    { id: 2, inputKor: '비밀번호 확인', inputEng: 'Password', essential: true },
    { id: 3, inputKor: '닉네임', inputEng: 'Nickname', essential: true },
    { id: 4, inputKor: '성별', inputEng: 'Gender', essential: true },
    { id: 5, inputKor: '키', inputEng: 'Height', essential: false },
    { id: 6, inputKor: '몸무게', inputEng: 'Weight', essential: false },
    { id: 7, inputKor: 'Squat(kg)', inputEng: 'Weight', essential: false },
    { id: 8, inputKor: 'Bench Press(kg)', inputEng: 'Weight', essential: false },
    { id: 9, inputKor: 'Deadlift(kg)', inputEng: 'Weight', essential: false },
    { id: 10, inputKor: 'Overhead Press(kg)', inputEng: 'Weight', essential: false },
];

const SignIn = () => {
    return (
        <>
            <SI.InputList>
                {SigninData.map(el => (
                    <SI.InputWrapper key={el.id}>
                        <SI.InputTitle>
                            {el.inputKor}&nbsp;
                            {el.essential ? '*' : ''}
                        </SI.InputTitle>
                        <InfoInput inputEng={el.inputEng} />
                    </SI.InputWrapper>
                ))}
            </SI.InputList>
            <SubmitButton />
        </>
    );
};

export default SignIn;
