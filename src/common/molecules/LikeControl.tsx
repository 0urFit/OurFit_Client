/* eslint-disable indent */
import Image from 'next/image';
import { useEffect, useState } from 'react';

import getErrorMessage from '@/utils/getErrorMessage';

import { LC } from './style';
import LikeIcon from '../../../public/assets/like-icon.svg';
import FilledLikeIcon from '../../../public/assets/filled-like-icon.svg';
import { LikeRequest } from '@/apis/likeRequest';

interface LikeControlType {
    id: number | undefined;
    liked: boolean;
    handleLikeList?: () => void;
}

const LikeControl = ({ id, liked, handleLikeList }: LikeControlType) => {
    const [isLike, setIsLike] = useState(liked);

    const handleLiked = async (routindId: number | undefined) => {
        const likeRequest = new LikeRequest(routindId);

        try {
            switch (isLike) {
                case false: {
                    const response = await likeRequest.LikePost();
                    const { result } = response.data;

                    setIsLike(result);
                    break;
                }
                case true: {
                    const response = await likeRequest.LikeDelete();
                    const { result } = response.data;

                    setIsLike(result);
                    break;
                }
            }
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    useEffect(() => {
        handleLikeList?.();
    }, [isLike]);

    return (
        <LC.LikeIconBtn onClick={() => handleLiked(id)}>
            {isLike ? <Image src={FilledLikeIcon} alt="채워진좋아요아이콘" fill={true} /> : <Image src={LikeIcon} alt="비어있는좋아요아이콘" fill={true} />}
        </LC.LikeIconBtn>
    );
};

export default LikeControl;
