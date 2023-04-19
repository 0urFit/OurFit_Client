import { SB } from './style';

interface propsType {
    buttonValue: string;
}

const SubmitButton = ({ buttonValue }: propsType) => {
    return <SB.Button type="submit" value={buttonValue} />;
};

export default SubmitButton;
