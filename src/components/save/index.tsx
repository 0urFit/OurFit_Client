import SmallSelect from '@/common/molecules/SmallSelect';
import { SV } from './style';
import { SelectOptions } from '@/data/SaveData';
import RoutineCard from '@/common/molecules/RoutineCard';
import BottomBar from '@/common/molecules/BottomBar';

const Save = () => {
    return (
        <SV.Box>
            <SV.SelectWrapper>
                <SmallSelect placeholder="카테고리" options={SelectOptions} />
            </SV.SelectWrapper>
            <SV.CardList>
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
            </SV.CardList>
            <SV.ButtonWrapper>
                <BottomBar />
            </SV.ButtonWrapper>
        </SV.Box>
    );
};

export default Save;
