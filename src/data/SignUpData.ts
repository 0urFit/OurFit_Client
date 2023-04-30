import { AgreeType, ItemType } from '@/components/signup/type';

const SignupData: ItemType[] = [
    {
        id: 0,
        inputType: 'text',
        inputValue: 'email',
        inputTitle: '이메일',
        explanation: 'Email',
        essential: '이메일은 필수 입력란 입니다.',
        pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        patternMessage: '이메일 형식과 다릅니다.',
    },
    {
        id: 1,
        inputType: 'password',
        inputValue: 'password',
        inputTitle: '비밀번호',
        explanation: 'Password',
        essential: '비밀번호는 필수 입력란 입니다.',
        minLength: 8,
        minLengthMessage: '8글자 이상 입력해주세요',
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
        patternMessage: '영어 대소문자, 숫자, 특수문자(@$!%*#?&)가 모두 포함되어야 합니다',
    },
    { id: 2, inputType: 'password', inputValue: 'passwordCheck', inputTitle: '비밀번호 확인', explanation: 'Password', essential: '비밀번호를 한번 더 입력해 주세요' },
    {
        id: 3,
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
    { id: 4, inputType: 'text', inputValue: 'gender', inputTitle: '성별', explanation: 'Gender', essential: '성별을 선택해 주세요' },
    {
        id: 5,
        inputType: 'number',
        inputValue: 'height',
        inputTitle: '키',
        explanation: 'Height',
        essential: false,
    },
    {
        id: 6,
        inputType: 'number',
        inputValue: 'weight',
        inputTitle: '몸무게',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 7,
        inputType: 'number',
        inputValue: 'squat',
        inputTitle: 'Squat(kg)',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 8,
        inputType: 'number',
        inputValue: 'benchpress',
        inputTitle: 'Bench Press(kg)',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 9,
        inputType: 'number',
        inputValue: 'deadlift',
        inputTitle: 'Deadlift(kg)',
        explanation: 'Weight',
        essential: false,
    },
    {
        id: 10,
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

const AgreeData: AgreeType[] = [
    {
        id: 0,
        content: '만 14세 이상입니다 (필수)',
        essential: true,
    },
    {
        id: 1,
        content: 'OURFIT 이용약관 동의 (필수)',
        essential: true,
    },
    {
        id: 2,
        content: 'OURFIT 개인정보 수집 및 이용 동의 (필수)',
        essential: true,
    },
];

export { SignupData, SelectOptions, AgreeData };
