import { ItemType } from '@/components/signup/type';

const SignupKakaoData: ItemType[] = [
    {
        id: 0,
        inputType: 'text',
        inputValue: 'nickname',
        inputTitle: '닉네임',
        explanation: 'Nickname',
        essential: '닉네임는 필수 입력란 입니다.',
        minLength: 3,
        minLengthMessage: '3글자 이상 입력해주세요',
        pattern: /^[A-za-z0-9가-힣]{3,10}$/,
        patternMessage: '영어 대소문자, 글자 단위 한글, 숫자만 가능합니다',
    },
    {
        id: 1,
        inputType: 'number',
        inputValue: 'height',
        inputTitle: '키',
        explanation: 'Height',
        essential: false,
    },
    {
        id: 2,
        inputType: 'number',
        inputValue: 'weight',
        inputTitle: '몸무게',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 3,
        inputType: 'number',
        inputValue: 'squat',
        inputTitle: 'Squat(kg)',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 4,
        inputType: 'number',
        inputValue: 'benchpress',
        inputTitle: 'Bench Press(kg)',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 5,
        inputType: 'number',
        inputValue: 'deadlift',
        inputTitle: 'Deadlift(kg)',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 6,
        inputType: 'number',
        inputValue: 'overheadpress',
        inputTitle: 'Overhead Press(kg)',
        explanation: 'Weight',
        essential: false,
    },
];

const SelectOptions = [
    { value: 'male', label: '남자' },
    { value: 'female', label: '여자' },
];

export { SignupKakaoData, SelectOptions };
