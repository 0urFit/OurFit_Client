import { useEffect, useState } from 'react';
import { ML } from '../style';
import { GetLikedRoutine } from '@/apis/apiService';
import getErrorMessage from '@/utils/getErrorMessage';
import RoutineCard from '@/common/molecules/RoutineCard';

const MypageLikes = () => {
    const [LikedRoutineData, setLikedRoutineData] = useState([]);

    const getData = async () => {
        try {
            const response = await GetLikedRoutine();
            const { result } = response.data;

            setLikedRoutineData(result);
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ML.MypageLikeBox>
            <ML.TitleWrapper>
                <ML.Title>Likes</ML.Title>
            </ML.TitleWrapper>
            <ML.LikedList>
                {LikedRoutineData.map(({ id, imgPath, period, liked, enrolled, fewTime, routineName, category }) => (
                    <RoutineCard
                        key={id}
                        id={id}
                        imgpath={imgPath}
                        period={period}
                        enrolled={enrolled}
                        fewTime={fewTime}
                        routineName={routineName}
                        category={category}
                        liked={liked}
                        handleLikeList={getData}
                    />
                ))}
            </ML.LikedList>
        </ML.MypageLikeBox>
    );
};

export default MypageLikes;
