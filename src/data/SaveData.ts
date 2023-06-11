import { SelectType } from '@/components/save/type';

const SelectOptions: SelectType[] = [
    { value: 'all', label: '전체' },
    { value: 'diet', label: '다이어트' },
    { value: 'strength', label: '스트렝스' },
    { value: 'bodybuilding', label: '바디빌딩' },
];

const WeekOptions: SelectType[] = [
    { value: 'Monday', label: 'Mon' },
    { value: 'Tuesday', label: 'Tue' },
    { value: 'Wednesday', label: 'Wed' },
    { value: 'Thursday', label: 'Thu' },
    { value: 'Friday', label: 'Fri' },
    { value: 'Saturday', label: 'Sat' },
    { value: 'Sunday', label: 'Sun' },
];

export { SelectOptions, WeekOptions };
