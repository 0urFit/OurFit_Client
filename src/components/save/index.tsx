import { useEffect, useState } from 'react';
import { SV } from './style';
import { MainSave } from '@/apis/auth';
import { SelectOptions } from '@/data/SaveData';
import SmallSelect from '@/common/molecules/SmallSelect';
import RoutineCard from '@/common/molecules/RoutineCard';
import BottomBar from '@/common/molecules/BottomBar';
import WeightIcon from '../../../public/assets/weight-icon.svg';
import Image from 'next/image';

const Save = () => {
    const [selectedValue, setSelectedValue] = useState<string>('all');
    const [saveData, setSaveData] = useState([]);

    useEffect(() => {
        handleSave(selectedValue);
    }, [selectedValue]);

    const handleSave = async (category: string) => {
        try {
            const result = await MainSave(category);
            setSaveData(result.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SV.Box>
            <SV.SelectWrapper>
                <SmallSelect placeholder="카테고리" options={SelectOptions} setSelectedValue={setSelectedValue} />
            </SV.SelectWrapper>
            {saveData.length === 0 ? (
                <SV.WarningBox>
                    <SV.WarningWrapper>
                        <Image src={WeightIcon} alt="weight-icon" width={100} height={100} />
                        <SV.WarningMessage>새로운 운동 루틴을 등록해보세요!</SV.WarningMessage>
                    </SV.WarningWrapper>
                </SV.WarningBox>
            ) : (
                <SV.CardList>
                    <RoutineCard />
                </SV.CardList>
            )}
            <SV.ButtonWrapper>
                <BottomBar />
            </SV.ButtonWrapper>
        </SV.Box>
    );
};

export default Save;
