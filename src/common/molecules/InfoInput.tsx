import { UseFormRegisterReturn } from 'react-hook-form';
import { II } from './style';

interface propsType {
    inputType: string;
    inputValue: string;
    register: UseFormRegisterReturn;
}

const InfoInput = ({ inputType, inputValue, register }: propsType) => {
    return (
        <II.InputWrapper>
            <II.Input type={inputType} placeholder={inputValue} step={inputType === 'number' ? '0.1' : ''} {...register} />
        </II.InputWrapper>
    );
};

export default InfoInput;
