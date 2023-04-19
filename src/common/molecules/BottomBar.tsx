import Image from 'next/image';
import { BB } from './style';
import { BottomBarData } from '@/data/BottomBarData';

const BottomBar = () => {
    return (
        <BB.BottomBarList>
            {BottomBarData.map(el => (
                <BB.ItemWrapper key={el.id}>
                    <BB.ImgWrapper>
                        <Image src={el.imageRoot} alt={el.listName} width={25} />
                    </BB.ImgWrapper>
                    <BB.Span>{el.listName}</BB.Span>
                </BB.ItemWrapper>
            ))}
        </BB.BottomBarList>
    );
};

export default BottomBar;
