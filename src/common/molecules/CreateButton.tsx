import { CB } from './style';

interface propsType {
    message: string;
    handleSubmit?: () => void;
    isSaved?: boolean;
}

const CreateButton = ({ message, handleSubmit, isSaved }: propsType) => {
    return (
        <CB.Button disabled={isSaved} onClick={handleSubmit} $isSaved={isSaved}>
            {message}
        </CB.Button>
    );
};

export default CreateButton;
