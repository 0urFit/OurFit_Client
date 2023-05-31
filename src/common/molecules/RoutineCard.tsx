import Image from 'next/image';
import { RC } from './style';

import { RoutineProps } from '@/components/home';

import LikeIcon from '../../../public/assets/like-icon.svg';
import { useAppDispatch } from '@/store/hook';
import { saveRoutine } from '@/store/slices/savedRoutineSlice';
import Link from 'next/link';

const RoutineCard = ({ imgpath, period, fewTime, routineName, category }: RoutineProps) => {
    const dispatch = useAppDispatch();

    const saveRoutineInfo = () => {
        dispatch(saveRoutine({ imgpath, period, fewTime, routineName, category }));
    };

    return (
        <RC.CardBox>
            <RC.CardWrapper>
                <RC.ImgWrapper>
                    <Image sizes="(max-width: 100px)" src={imgpath} fill={true} alt="운동이미지" />
                </RC.ImgWrapper>
                <RC.DescWrapper>
                    <Link href="/home/detail">
                        <RC.span>{routineName}</RC.span>
                    </Link>
                    <RC.ul>
                        <RC.li># {category}</RC.li>
                        <RC.li># {period}</RC.li>
                        <RC.li># {fewTime} times a week</RC.li>
                    </RC.ul>
                    <div></div>
                    <RC.DescFooterWrapper>
                        <RC.CoachNameWrapper>
                            <RC.CoachName>{routineName}</RC.CoachName>
                        </RC.CoachNameWrapper>
                        <RC.ClickWrapper>
                            <RC.LikeIconWrapper>
                                <Image src={LikeIcon} alt="좋아요아이콘" width={25} />
                            </RC.LikeIconWrapper>
                            <RC.BtnWrapper>
                                <RC.AddBtn onClick={saveRoutineInfo}>추 가</RC.AddBtn>
                            </RC.BtnWrapper>
                        </RC.ClickWrapper>
                    </RC.DescFooterWrapper>
                </RC.DescWrapper>
            </RC.CardWrapper>
        </RC.CardBox>
    );
};

export default RoutineCard;

// 이미지 경로, 운동제목,
