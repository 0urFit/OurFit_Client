import BottomBar from '@/common/molecules/BottomBar';
import { MP } from './style';
import RoutineCard from '@/common/molecules/RoutineCard';
import { useEffect, useState } from 'react';
import { GetLikedRoutine, SaveRoutineInfo } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import Link from 'next/link';

const Mypage = () => {
    const [routineCardList, setRoutineCardList] = useState([]);

    const handleSaveRoutine = async (routineId: number | undefined) => {
        try {
            const response = await SaveRoutineInfo(routineId);

            return response.data;
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    const getRoutineList = async () => {
        try {
            const response = await GetLikedRoutine();
            const { result } = response.data;

            setRoutineCardList(result);

            return response;
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    useEffect(() => {
        getRoutineList();
    }, []);

    return (
        <>
            <MP.DescBox>
                <MP.DescTable>
                    <MP.Thead>
                        <MP.Tr>
                            <MP.Th>Profile Description</MP.Th>
                        </MP.Tr>
                    </MP.Thead>
                    <MP.Tbody>
                        <MP.Tr>
                            <MP.contentTitle>NickName</MP.contentTitle>
                            <MP.content>최선재</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Height</MP.contentTitle>
                            <MP.content>180</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Weight</MP.contentTitle>
                            <MP.content>80</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Squat</MP.contentTitle>
                            <MP.content>100</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Bench Press</MP.contentTitle>
                            <MP.content>100</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Deadlift</MP.contentTitle>
                            <MP.content>100</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Overhead Press</MP.contentTitle>
                            <MP.content>100</MP.content>
                        </MP.Tr>
                    </MP.Tbody>
                </MP.DescTable>
            </MP.DescBox>
            <MP.LikeListBox>
                <MP.LikeHeader>
                    <MP.Title>Likes</MP.Title>
                    <Link
                        href="/mypage/likes"
                        style={{
                            color: '#000',
                        }}
                    >
                        <MP.MoreBtnBox>
                            <MP.MoreIconWrapper>+</MP.MoreIconWrapper>
                            <MP.MoreBtn>더보기</MP.MoreBtn>
                        </MP.MoreBtnBox>
                    </Link>
                </MP.LikeHeader>
                <MP.LikeContentsBox>
                    {routineCardList.map(({ id, imgPath, period, liked, enrolled, fewTime, routineName, category }) => (
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
                            handleButton={handleSaveRoutine}
                            handleLikeList={getRoutineList}
                        />
                    ))}
                </MP.LikeContentsBox>
            </MP.LikeListBox>
            <MP.BottomWrapper>
                <BottomBar />
            </MP.BottomWrapper>
        </>
    );
};

export default Mypage;
