import { ItemType } from '@/common/molecules/type';
import HomeIcon from '../../public/assets/home-icon.png';
import SaveIcon from '../../public/assets/save-icon.png';
import PostIcon from '../../public/assets/post-icon.png';
import ProfileIcon from '../../public/assets/profile-icon.png';

export const BottomBarData: ItemType[] = [
    { id: 0, imageRoot: HomeIcon, listName: 'Home', pageRoot: '/home' },
    { id: 1, imageRoot: SaveIcon, listName: 'Save', pageRoot: '/save' },
    { id: 2, imageRoot: PostIcon, listName: 'Post', pageRoot: '/posts' },
    { id: 3, imageRoot: ProfileIcon, listName: 'Profile', pageRoot: '/mypage' },
];
