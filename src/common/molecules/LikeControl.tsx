/* eslint-disable indent */
import Image from 'next/image';
import { useState } from 'react';

import { LikeIconClick, LikeIconUnclick } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';

import { LC } from './style';
import LikeIcon from '../../../public/assets/like-icon.svg';
import FilledLikeIcon from '../../../public/assets/filled-like-icon.svg';

interface LikeControlType {
    id: number | undefined;
    liked: boolean;
}

const LikeControl = ({ id, liked }: LikeControlType) => {
    const [isLike, setIsLike] = useState(liked);

    const fetchLiked = async (routineId: number | undefined) => {
        try {
            if (!isLike) {
                const response = await LikeIconClick(routineId);
                const { result } = response.data;

                setIsLike(result);
            } else {
                const response = await LikeIconUnclick(routineId);
                const { result } = response.data;

                setIsLike(result);
            }
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    return (
        <LC.LikeIconBtn onClick={() => fetchLiked(id)}>
            {isLike ? <Image src={FilledLikeIcon} alt="채워진좋아요아이콘" fill={true} /> : <Image src={LikeIcon} alt="비어있는좋아요아이콘" fill={true} />}
        </LC.LikeIconBtn>
    );
};

export default LikeControl;
