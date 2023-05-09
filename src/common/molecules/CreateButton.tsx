import { CB } from './style';

interface propsType {
    message: string;
}

const CreateButton = ({ message }: propsType) => {
    return <CB.Button>{message}</CB.Button>;
};

export default CreateButton;
