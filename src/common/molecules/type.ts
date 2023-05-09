import { HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export type ItemType = {
    id: number;
    imageRoot: StaticImageData;
    listName: string;
    pageRoot: string;
};
export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
    emailMargin: boolean | undefined;
    pwMargin: boolean | undefined;
}
