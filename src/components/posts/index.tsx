import Preparing from '@/common/molecules/Preparing';
import { PT } from './style';
import BottomBar from '@/common/molecules/BottomBar';

const Posts = () => {
    return (
        <PT.PostsBox>
            <Preparing />
            <PT.BottomWrapper>
                <BottomBar />
            </PT.BottomWrapper>
        </PT.PostsBox>
    );
};

export default Posts;
