import { SB } from './style';

interface propsType {
    buttonValue: string;
    isValid?: boolean;
}

const SubmitButton = ({ buttonValue, isValid }: propsType) => {
    return <SB.Button type="submit" value={buttonValue} disabled={isValid} />;
};

export default SubmitButton;
