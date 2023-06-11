import PostCard from '../molecules/PostCard';
import { ML } from './Style';

const MypageList = () => {
    return (
        <>
            <ML.TitleWrapper>
                <ML.Span>Likes</ML.Span>
            </ML.TitleWrapper>
            <ML.CardList>
                <PostCard />
                <PostCard />
                <PostCard />
            </ML.CardList>
        </>
    );
};

export default MypageList;
