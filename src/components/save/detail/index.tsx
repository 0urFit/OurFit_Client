import { getServerSideProps } from '@/pages/save/detail/[slug]';

import { InferGetServerSidePropsType } from 'next/types';

import { BB } from '../style';
import ExerciseDetailMain from './ExerciseDetailMain';

const SaveDetail = ({ props: { data } }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { period, routineId, slug, weekProgress } = data;

    return (
        <BB.Container>
            <BB.TopBox>
                <BB.TopWrapper>
                    <BB.Title>{data.slug}</BB.Title>
                    <BB.TagWrapper>
                        <BB.Tag>#{slug}</BB.Tag>
                        <BB.Tag>#{period}weeks</BB.Tag>
                    </BB.TagWrapper>
                </BB.TopWrapper>
            </BB.TopBox>
            <ExerciseDetailMain routineId={routineId} weekProgress={weekProgress} />
        </BB.Container>
    );
};

export default SaveDetail;
