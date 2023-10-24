/* eslint-disable indent */
import Image from 'next/image';
import { useEffect, useState } from 'react';

import getErrorMessage from '@/utils/getErrorMessage';

import { LC } from './style';
import LikeIcon from '../../../public/assets/like-icon.svg';
import FilledLikeIcon from '../../../public/assets/filled-like-icon.svg';
import { LikeDelete, LikePost } from '@/apis/apiService';

interface LikeControlType {
    id: number | undefined;
    liked: boolean;
    handleLikeList?: () => void;
}

const LikeControl = ({ id, liked, handleLikeList }: LikeControlType) => {
    const [isLike, setIsLike] = useState(liked);

    const handleLiked = async (routindId: number | undefined) => {
        switch (isLike) {
            case false: {
                try {
                    const response = await LikePost(routindId);
                    const { result } = response.data;

                    setIsLike(result);
                    break;
                } catch (error) {
                    throw new Error(getErrorMessage(error));
                }
            }
            case true: {
                try {
                    const response = await LikeDelete(routindId);
                    const { result } = response.data;

                    setIsLike(result);
                    break;
                } catch (error) {
                    throw new Error(getErrorMessage(error));
                }
            }
        }
    };

    useEffect(() => {
        setIsLike(liked);
    }, [liked]);

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
