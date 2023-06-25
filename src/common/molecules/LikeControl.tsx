/* eslint-disable indent */
import Image from 'next/image';

import { LC } from './style';
import LikeIcon from '../../../public/assets/like-icon.svg';
import FilledLikeIcon from '../../../public/assets/filled-like-icon.svg';
import { LikeIconClick, LikeIconUnclick } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
interface LikeControlType {
    id: number | undefined;
    liked: boolean | undefined;
    routineCategory: string;
    handleLike: (endpoind: string) => void;
}

const LikeControl = ({ id, liked, routineCategory, handleLike }: LikeControlType) => {
    const handleIsLike = async (routineId: number | undefined) => {
        if (!liked) {
            try {
                const response = await LikeIconClick(routineId);
                handleLike(routineCategory);

                return response.data;
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        } else {
            try {
                const response = await LikeIconUnclick(routineId);
                handleLike(routineCategory);

                return response.data;
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        }
    };

    return (
        <LC.LikeIconBtn onClick={() => handleIsLike(id)}>
            {liked ? <Image src={FilledLikeIcon} alt="채워진좋아요아이콘" fill={true} /> : <Image src={LikeIcon} alt="비어있는좋아요아이콘" fill={true} />}
        </LC.LikeIconBtn>
    );
};

export default LikeControl;
