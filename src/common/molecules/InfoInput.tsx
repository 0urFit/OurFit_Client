import { UseFormRegisterReturn } from 'react-hook-form';
import { II } from './style';

interface propsType {
    inputType: string;
    explanation: string;
    register: UseFormRegisterReturn;
}

const InfoInput = ({ inputType, explanation, register }: propsType) => {
    return (
        <II.InputWrapper>
            <II.Input
                type={inputType}
                placeholder={explanation}
                step={inputType === 'number' ? '0.1' : ''}
                {...register}
            />
        </II.InputWrapper>
    );
};

export default InfoInput;
