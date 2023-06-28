/* eslint-disable indent */
import Image from 'next/image';

import { LC } from './style';
import LikeIcon from '../../../public/assets/like-icon.svg';
import FilledLikeIcon from '../../../public/assets/filled-like-icon.svg';
import { LikeIconClick, LikeIconUnclick } from '@/apis/auth';
import { useState } from 'react';

interface LikeControlType {
    id: number | undefined;
    liked: boolean;
}

const LikeControl = ({ id, liked }: LikeControlType) => {
    const [test, setTest] = useState(liked);

    const fetchLiked = async (routineId: number | undefined) => {
        try {
            if (!test) {
                const response = await LikeIconClick(routineId);
                const { result } = response.data;

                setTest(result);
            } else {
                const response = await LikeIconUnclick(routineId);
                const { result } = response.data;

                setTest(result);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <LC.LikeIconBtn onClick={() => fetchLiked(id)}>
            {test ? <Image src={FilledLikeIcon} alt="채워진좋아요아이콘" fill={true} /> : <Image src={LikeIcon} alt="비어있는좋아요아이콘" fill={true} />}
        </LC.LikeIconBtn>
    );
};

export default LikeControl;
