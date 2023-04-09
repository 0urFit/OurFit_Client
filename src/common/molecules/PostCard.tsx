import { PC } from './style';

const PostCard = () => {
    return (
        <PC.CardBox>
            <PC.CardWrapper>
                <PC.Title>이 운동 루틴 좋네요! 여러분들도..</PC.Title>
                <PC.TagList>
                    <PC.TagItem>#diet</PC.TagItem>
                    <PC.TagItem>#woman</PC.TagItem>
                </PC.TagList>
                <PC.PostDate>2023.4.1</PC.PostDate>
            </PC.CardWrapper>
        </PC.CardBox>
    );
};

export default PostCard;
