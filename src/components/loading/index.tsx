import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/router';

import { SocialKakaoLogin } from '@/apis/auth';

const override: React.CSSProperties = {
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
};

const Loading = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getAuthCode = async () => {
            const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');

            try {
                const response = await SocialKakaoLogin(KAKAO_CODE);
            } catch (error) {
                console.log(error);
            }
        };

        const test = getAuthCode();
        console.log(test);
    }, []);

    return (
        <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <BeatLoader size={20} color="#36d7b7" loading={isLoading} cssOverride={override} />
        </div>
    );
};

export default Loading;
