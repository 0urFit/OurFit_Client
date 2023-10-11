import { CB } from './style';

interface propsType {
    message: string;
    handleSubmit?: () => void;
}

const CreateButton = ({ message, handleSubmit }: propsType) => {
    return <CB.Button onClick={handleSubmit}>{message}</CB.Button>;
};

export default CreateButton;
