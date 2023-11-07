import { BeatLoader } from 'react-spinners';
import { LD } from './style';

const override: React.CSSProperties = {
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
};

const Loading = () => {
    return (
        <LD.Box>
            <BeatLoader size={20} color="#36d7b7" loading={true} cssOverride={override} />
        </LD.Box>
    );
};

export default Loading;
