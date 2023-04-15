import { II } from './style';

interface propsType {
    inputEng: string;
}

const InfoInput = ({ inputEng }: propsType) => {
    return (
        <II.InputWrapper>
            <II.Input placeholder={inputEng} />
        </II.InputWrapper>
    );
};

export default InfoInput;
