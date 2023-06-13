import { SelectType } from '@/components/save/type';

const SelectOptions: SelectType[] = [
    { value: 'all', label: '전체' },
    { value: 'diet', label: '다이어트' },
    { value: 'strength', label: '스트렝스' },
    { value: 'bodybuilding', label: '바디빌딩' },
];

const WeekOptions: SelectType[] = [
    { value: 'Mon', label: 'Mon' },
    { value: 'Tue', label: 'Tue' },
    { value: 'Wed', label: 'Wed' },
    { value: 'Thu', label: 'Thu' },
    { value: 'Fri', label: 'Fri' },
    { value: 'Sat', label: 'Sat' },
    { value: 'Sun', label: 'Sun' },
];

export { SelectOptions, WeekOptions };
