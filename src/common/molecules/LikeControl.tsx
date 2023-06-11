/* eslint-disable indent */

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { LikeIconClick, LikeIconUnclick } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';

import { LC } from './style';
import LikeIcon from '../../../public/assets/like-icon.svg';
import FilledLikeIcon from '../../../public/assets/filled-like-icon.svg';
import { tokenInstance } from '@/apis/client';

interface LikeControlPropsType {
    routineId: number | undefined;
}

const LikeControl = ({ routineId }: LikeControlPropsType) => {
    const [isFillLikeIcon, setIsFillLikeIcon] = useState<boolean | null>(null);

    const handleFillLikeIcon = () => {
        setIsFillLikeIcon(prev => (prev === null || prev === false ? true : false));
    };

    useEffect(() => {
        const fetchLikeIcon = async (routineId: number | undefined) => {
            try {
                if (isFillLikeIcon) {
                    const response = await LikeIconClick(routineId);

                    return response.data;
                } else {
                    const response = await LikeIconUnclick(routineId);

                    return response.data;
                }
            } catch (e) {
                console.log(e);
                throw new Error(getErrorMessage(e));
            }
        };

        switch (isFillLikeIcon) {
            case true:
                fetchLikeIcon(routineId);
                break;
            case false:
                fetchLikeIcon(routineId);
                break;
            default:
                return;
        }
    }, [isFillLikeIcon]);

    return (
        <LC.LikeIconBtn onClick={handleFillLikeIcon}>
            {isFillLikeIcon ? <Image src={FilledLikeIcon} alt="채워진좋아요아이콘" fill={true} /> : <Image src={LikeIcon} alt="비어있는좋아요아이콘" fill={true} />}
        </LC.LikeIconBtn>
    );
};

export default LikeControl;
