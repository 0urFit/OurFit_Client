import { useRouter } from 'next/router';

import styled from 'styled-components';

import { NOT_FOUND, NOT_FOUND_MESSAGE, NOT_FOUND_PREV_BUTTON_TITLE } from '@/utils/clientErrorMessage';

const Custom404 = () => {
    const router = useRouter();

    const handleMovePrev = () => {
        router.back();
    };

    return (
        <Box>
            <ErrorTitle>{NOT_FOUND}</ErrorTitle>
            <ErrorDescription>{NOT_FOUND_MESSAGE}</ErrorDescription>
            <MovePrevButton onClick={handleMovePrev}>{NOT_FOUND_PREV_BUTTON_TITLE}</MovePrevButton>
        </Box>
    );
};

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
const ErrorTitle = styled.h1`
    font-size: 2.5rem;
    color: #e71515;
`;
const ErrorDescription = styled.div`
    text-align: center;
    vertical-align: middle;
    margin-bottom: 1.25rem;
    font-size: 1.75rem;
    line-height: 1.3;
    white-space: pre-line;
`;
const MovePrevButton = styled.button`
    width: 5.625rem;
    height: 1.875rem;
    border: 0.0625rem solid #888;
    border-radius: 0.3125rem;
    font-weight: bold;
`;

export default Custom404;
