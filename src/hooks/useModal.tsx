import { useEffect, useState } from 'react';

import { ModalType } from './type';

const useModal = () => {
    const [isModal, setIsModal] = useState(false);
    const [portalElement, setPortalElement] = useState<ModalType>(null);
    const [backDropElement, setBackDropElement] = useState<ModalType>(null);

    const updateIsModal = (modalState: boolean) => {
        setIsModal(modalState);
    };

    useEffect(() => {
        setPortalElement(document.getElementById('portal'));
        setBackDropElement(document.getElementById('back-drop'));
    }, []);

    return {
        isModal,
        updateIsModal,
        portalElement,
        backDropElement,
    };
};

export default useModal;
