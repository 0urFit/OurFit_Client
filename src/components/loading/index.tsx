import { getServerSideProps } from '@/pages/verifying';
import { setRefreshToken } from '@/utils/manageCookie';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType } from 'next/types';
import React, { useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

const override: React.CSSProperties = {
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
};

export interface VerifyingPagePropsType {
    accessToken: string;
    refreshToken: string;
    success: boolean;
}

const Loading = ({ verifyingPageProps }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();

    useEffect(() => {
        const { accessToken, refreshToken, success } = verifyingPageProps;

        localStorage.setItem('access_token', accessToken);
        setRefreshToken(refreshToken);

        if (success) {
            router.push('/home');
        } else {
            router.push('/signup/kakao');
        }
    }, []);
    return (
        <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <BeatLoader size={20} color="#36d7b7" loading={true} cssOverride={override} />
        </div>
    );
};

export default Loading;
