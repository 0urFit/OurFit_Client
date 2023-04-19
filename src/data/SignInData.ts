import { ItemType } from '@/components/signin/type';

export const SigninData: ItemType[] = [
    { id: 0, inputType: 'email', inputValue: 'email', inputTitle: '이메일', explanation: 'Email', essential: true },
    { id: 1, inputType: 'password', inputValue: 'password', inputTitle: '비밀번호', explanation: 'Password', essential: true },
    { id: 2, inputType: 'password', inputValue: 'passwordCheck', inputTitle: '비밀번호 확인', explanation: 'Password', essential: true },
    { id: 3, inputType: 'text', inputValue: 'nickname', inputTitle: '닉네임', explanation: 'Nickname', essential: true },
    { id: 4, inputType: 'text', inputValue: 'gender', inputTitle: '성별', explanation: 'Gender', essential: true },
    { id: 5, inputType: 'number', inputValue: 'height', inputTitle: '키', explanation: 'Height', essential: false },
    { id: 6, inputType: 'number', inputValue: 'weight', inputTitle: '몸무게', explanation: 'Weight', essential: false },
    { id: 7, inputType: 'number', inputValue: 'squat', inputTitle: 'Squat(kg)', explanation: 'Weight', essential: false },
    { id: 8, inputType: 'number', inputValue: 'benchpress', inputTitle: 'Bench Press(kg)', explanation: 'Weight', essential: false },
    { id: 9, inputType: 'number', inputValue: 'deadlift', inputTitle: 'Deadlift(kg)', explanation: 'Weight', essential: false },
    { id: 10, inputType: 'number', inputValue: 'overheadPress', inputTitle: 'Overhead Press(kg)', explanation: 'Weight', essential: false },
];
