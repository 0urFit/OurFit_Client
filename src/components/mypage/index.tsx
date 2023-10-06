import Link from 'next/link';
import { useEffect, useState } from 'react';

import BottomBar from '@/common/molecules/BottomBar';
import RoutineCard from '@/common/molecules/RoutineCard';

import { GetLikedRoutine, GetUserInfo, SaveRoutineInfo } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';

import { MP } from './style';
import LogoutButton from './LogoutButton';

const Mypage = () => {
    const [routineCardList, setRoutineCardList] = useState([]);
    const [userData, setUserdata] = useState({
        nickname: '',
        weight: 0,
        height: 0,
        squat: 0,
        benchpress: 0,
        deadlift: 0,
        overheadpress: 0,
    });

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

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await GetUserInfo();
                const { result } = response.data;

                setUserdata(result);

                return response.data;
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <MP.DescBox>
                <MP.DescTable>
                    <MP.Thead>
                        <MP.Tr>
                            <MP.Th>Profile Description</MP.Th>
                            <MP.Th>
                                <MP.EditButtonWrapper>
                                    <MP.Editbutton>수 정</MP.Editbutton>
                                </MP.EditButtonWrapper>
                            </MP.Th>
                        </MP.Tr>
                    </MP.Thead>
                    <MP.Tbody>
                        <MP.Tr>
                            <MP.contentTitle>NickName</MP.contentTitle>
                            <MP.content>{userData.nickname}</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Height</MP.contentTitle>
                            <MP.content>{userData.height ? `${userData.height}cm` : '-'}</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Weight</MP.contentTitle>
                            <MP.content>{userData.weight ? `${userData.weight}kg` : '-'}</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Squat</MP.contentTitle>
                            <MP.content>{userData.squat ? `${userData.squat}kg` : '-'}</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Bench Press</MP.contentTitle>
                            <MP.content>{userData.benchpress ? `${userData.benchpress}kg` : '-'}</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Deadlift</MP.contentTitle>
                            <MP.content>{userData.deadlift ? `${userData.deadlift}kg` : '-'}</MP.content>
                        </MP.Tr>
                        <MP.Tr>
                            <MP.contentTitle>Overhead Press</MP.contentTitle>
                            <MP.content>{userData.overheadpress ? `${userData.overheadpress}kg` : '-'}</MP.content>
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
            <LogoutButton />
            <MP.BottomWrapper>
                <BottomBar />
            </MP.BottomWrapper>
        </>
    );
};

export default Mypage;
