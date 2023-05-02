import Image from 'next/image';
import { RC } from './style';

import CardImg from '../../../public/assets/Card-img.jpg';
import LikeIcon from '../../../public/assets/like-icon.svg';

const RoutineCard = () => {
    return (
        <RC.CardBox>
            <RC.CardWrapper>
                <RC.ImgWrapper>
                    <Image src={CardImg} alt="운동이미지" />
                </RC.ImgWrapper>
                <RC.DescWrapper>
                    <RC.span>nSuns</RC.span>
                    <RC.ul>
                        <RC.li>#diet</RC.li>
                        <RC.li>#Female</RC.li>
                        <RC.li>#6weeks</RC.li>
                    </RC.ul>
                    <div></div>
                    <RC.DescFooterWrapper>
                        <RC.CoachNameWrapper>
                            <RC.CoachName>By r/Fitness</RC.CoachName>
                        </RC.CoachNameWrapper>
                        <RC.ClickWrapper>
                            <RC.LikeIconWrapper>
                                <Image src={LikeIcon} alt="좋아요아이콘" width={25} />
                            </RC.LikeIconWrapper>
                            <RC.BtnWrapper>
                                <RC.AddBtn>추 가</RC.AddBtn>
                            </RC.BtnWrapper>
                        </RC.ClickWrapper>
                    </RC.DescFooterWrapper>
                </RC.DescWrapper>
            </RC.CardWrapper>
        </RC.CardBox>
    );
};

export default RoutineCard;
