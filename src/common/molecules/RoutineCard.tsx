import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import LikeControl from './LikeControl';

import { SaveRoutineInfo } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import deleteBlank from '@/utils/deleteBlank';

import { RC } from './style';
import { RoutineProps } from './type';

const RoutineCard = ({ id, imgpath, period, fewTime, routineName, category, weekProgress }: RoutineProps) => {
    const [savedCard, setSavedCard] = useState(false);

    const pathName = useRouter().asPath;

    const DeletedBlankRoutineName = deleteBlank({ routineName });

    const handleSaveRoutine = async (routineId: number | undefined) => {
        try {
            const response = await SaveRoutineInfo(routineId);

            setSavedCard(true);

            return response.data;
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
                            query: { slug: DeletedBlankRoutineName, routineId: id, period, weekProgress },
                        }}
                        as={`${pathName}/detail/${DeletedBlankRoutineName}`}
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
                            <LikeControl routineId={id} />
                            <RC.BtnWrapper savedCard={savedCard}>
                                <RC.AddBtn onClick={() => handleSaveRoutine(id)} disabled={savedCard}>
                                    추 가
                                </RC.AddBtn>
                            </RC.BtnWrapper>
                        </RC.ClickWrapper>
                    </RC.DescFooterWrapper>
                </RC.DescWrapper>
            </RC.CardWrapper>
        </RC.CardBox>
    );
};

export default RoutineCard;
