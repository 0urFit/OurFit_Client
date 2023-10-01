import React from 'react';
import { useRouter } from 'next/router';

import { manageAccessToken } from '@/utils/manageLocalStorage';
import { manageRefreshToken } from '@/utils/manageCookie';

import { MP } from './style';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        manageAccessToken.REMOVE();
        manageRefreshToken.REMOVE();

        router.push('/');
    };

    return (
        <MP.LogoutWrapper>
            <MP.LogoutButton onClick={handleLogout}>로그아웃</MP.LogoutButton>
        </MP.LogoutWrapper>
    );
};

export default LogoutButton;
