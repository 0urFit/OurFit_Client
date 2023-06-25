import { HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

type ItemType = {
    id: number;
    imageRoot: StaticImageData;
    listName: string;
    pageRoot: string;
};
interface StyledProps extends HTMLAttributes<HTMLDivElement> {
    emailMargin?: boolean | undefined;
    pwMargin?: boolean | undefined;
    enrolled?: boolean;
}

type RoutineProps = {
    id?: number;
    imgpath: string;
    period?: number;
    enrolled?: boolean;
    fewTime?: number;
    routineName?: string;
    liked: boolean;
    category?: string;
    weekProgress?: number;
    routineCategory: string;
    handleButton?: (id: number | undefined) => void;
    handleLike: (endpoint: string) => void;
};

export type { ItemType, StyledProps, RoutineProps };
