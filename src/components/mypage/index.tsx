import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import RoutineCard from '@/common/molecules/RoutineCard';
import LogoutButton from './LogoutButton';
import EditInput from './EditInput';

import { EditUserInfo, GetLikedRoutine, GetUserInfo, SaveRoutineInfo } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';

import { Entries, UserInfoType, ProfileInfoEditType } from './types';
import { MP } from './style';

const Mypage = () => {
    const [routineCardList, setRoutineCardList] = useState([]);
    const [userData, setUserdata] = useState<UserInfoType[]>([]);
    const [isEdit, setIsEdit] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { submitCount },
    } = useForm<ProfileInfoEditType>({
        mode: 'onChange',
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

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleUserInfoEditSuccess = async (editedUserInfoData: ProfileInfoEditType) => {
        try {
            const response = await EditUserInfo(editedUserInfoData);
            console.log(response);
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
        setIsEdit(false);
    };

    useEffect(() => {
        getRoutineList();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await GetUserInfo();
                const { result } = response.data;
                const tempData: UserInfoType[] = [];

                (Object.entries(result) as Entries<UserInfoType>).forEach(([key, value]) => {
                    tempData.push({ name: key, value });
                });

                setUserdata(tempData);
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        };

        fetchUserData();
    }, [submitCount]);

    return (
        <>
            <MP.DescFormBox onSubmit={handleSubmit(handleUserInfoEditSuccess)}>
                <MP.DescTitle>Profile Description</MP.DescTitle>
                {isEdit ? (
                    <MP.ProfileInfoEditSuccess type="submit">저장하기</MP.ProfileInfoEditSuccess>
                ) : (
                    <MP.ProfileInfoEdit type="button" onClick={handleEdit}>
                        수정하기
                    </MP.ProfileInfoEdit>
                )}
                {userData.map(({ name, value }) => (
                    <React.Fragment key={name}>
                        <MP.ContentsTitle>{name}</MP.ContentsTitle>
                        {isEdit && name !== 'nickname' ? (
                            <EditInput
                                register={register(name as keyof ProfileInfoEditType, {
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: '숫자만 입력 가능',
                                    },
                                })}
                                value={value}
                            />
                        ) : (
                            <MP.ContentsValue>{value}</MP.ContentsValue>
                        )}
                    </React.Fragment>
                ))}
            </MP.DescFormBox>
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
                <MP.LogoutWrapper>
                    <LogoutButton />
                </MP.LogoutWrapper>
            </MP.BottomWrapper>
        </>
    );
};

export default Mypage;
