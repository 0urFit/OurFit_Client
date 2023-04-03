import Image from 'next/image';
import { BB } from './style';
import { ItemType } from './type';
import HomeIcon from '../../../public/assets/home-icon.png';
import SaveIcon from '../../../public/assets/save-icon.png';
import PostIcon from '../../../public/assets/post-icon.png';
import ProfileIcon from '../../../public/assets/profile-icon.png';

const BottomBarData: ItemType[] = [
    { id: 0, imageRoot: HomeIcon, listName: 'Home' },
    { id: 1, imageRoot: SaveIcon, listName: 'Save' },
    { id: 2, imageRoot: PostIcon, listName: 'Post' },
    { id: 3, imageRoot: ProfileIcon, listName: 'Profile' },
];

const BottomBar = () => {
    return (
        <>
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
        </>
    );
};

export default BottomBar;
