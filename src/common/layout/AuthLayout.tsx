import { ReactNode } from 'react';
import { DL } from './style';
import PrevButton from '../molecules/PrevButton';

interface AuthLayoutProps {
    children: ReactNode;
    isShowPrevBtn: boolean;
}

const AuthLayout = ({ children, isShowPrevBtn }: AuthLayoutProps) => {
    return (
        <DL.PageLayout>
            {isShowPrevBtn && (
                <DL.PrevBtnWrapper>
                    <PrevButton />
                </DL.PrevBtnWrapper>
            )}
            <DL.AuthLayoutStyle>{children}</DL.AuthLayoutStyle>
        </DL.PageLayout>
    );
};

export default AuthLayout;
