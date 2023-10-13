import Image from 'next/image';
import { BB } from './style';
import { BottomBarData } from '@/data/BottomBarData';
import { H } from '@/components/home/style';

const BottomBar = () => {
    return (
        <H.BottomButtonWrapper>
            <BB.BottomBarList>
                {BottomBarData.map(el => (
                    <BB.ItemWrapper key={el.id} href={el.pageRoot}>
                        <BB.ImgWrapper>
                            <Image src={el.imageRoot} alt={el.listName} width={25} />
                        </BB.ImgWrapper>
                        <BB.Span>{el.listName}</BB.Span>
                    </BB.ItemWrapper>
                ))}
            </BB.BottomBarList>
        </H.BottomButtonWrapper>
    );
};

export default BottomBar;
