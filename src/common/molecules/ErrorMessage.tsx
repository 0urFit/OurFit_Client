import { EM } from './style';

interface ErrorMessageType {
    errorText: string | undefined;
}

const ErrorMessage = ({ errorText }: ErrorMessageType) => {
    return (
        <EM.ErrorMessageWrapper>
            <EM.Sentence>{errorText}</EM.Sentence>
        </EM.ErrorMessageWrapper>
    );
};

export default ErrorMessage;
