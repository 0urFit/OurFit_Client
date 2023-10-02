import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import LikeControl from './LikeControl';

import deleteBlank from '@/utils/deleteBlank';

import { RC } from './style';

import { RoutineProps } from './type';
import { SaveRoutineInfo } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';

const RoutineCard = ({ id, imgpath, period, enrolled, liked, fewTime, routineName, category, weekProgress, handleButton, handleLikeList }: RoutineProps) => {
    const [isEnrolled, setIsEnrolled] = useState(enrolled);

    const pathName = useRouter().asPath;

    const DeletedBlankRoutineName = deleteBlank({ routineName });

    const fetchEnrolled = async (routineId: number | undefined) => {
        try {
            const response = await SaveRoutineInfo(routineId);
            const { success } = response.data;

            setIsEnrolled(success);
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    return (
        <RC.CardBox>
            <RC.CardWrapper>
                <RC.ImgWrapper>
                    <Image priority sizes="(max-width: 100px)" src={imgpath} fill={true} alt="운동이미지" />
                </RC.ImgWrapper>
                <RC.DescWrapper>
                    <Link
                        href={{
                            pathname: `${pathName}/detail/[slug]`,
                            query: { slug: DeletedBlankRoutineName, routineId: id, liked, period, weekProgress },
                        }}
                    >
                        <RC.span>{routineName}</RC.span>
                    </Link>
                    <RC.ul>
                        <RC.li>#{category}</RC.li>
                        <RC.li>#{period}</RC.li>
                        <RC.li>#{fewTime} times a week</RC.li>
                    </RC.ul>
                    <div></div>
                    <RC.DescFooterWrapper>
                        <RC.CoachNameWrapper>
                            <RC.CoachName>{routineName}</RC.CoachName>
                        </RC.CoachNameWrapper>
                        <RC.ClickWrapper>
                            <LikeControl id={id} handleLikeList={handleLikeList} />
                            {pathName === '/save' ? (
                                <RC.DeleteWrapper>
                                    <RC.AddBtn onClick={() => handleButton?.(id)}>삭 제</RC.AddBtn>
                                </RC.DeleteWrapper>
                            ) : (
                                <RC.BtnWrapper enrolled={isEnrolled}>
                                    <RC.AddBtn onClick={() => fetchEnrolled?.(id)} disabled={isEnrolled}>
                                        추 가
                                    </RC.AddBtn>
                                </RC.BtnWrapper>
                            )}
                        </RC.ClickWrapper>
                    </RC.DescFooterWrapper>
                </RC.DescWrapper>
            </RC.CardWrapper>
        </RC.CardBox>
    );
};

export default RoutineCard;
