import { UseFormRegisterReturn } from 'react-hook-form';

import styled from 'styled-components';

interface EditInputProp {
    register: UseFormRegisterReturn;
    value: number | string;
}

const EditInput = ({ register, value }: EditInputProp) => {
    return <Input {...register} type="text" defaultValue={value} />;
};

const Input = styled.input`
    border: 0.0625rem solid #e1e2e3;
    outline: none;
`;

export default EditInput;
