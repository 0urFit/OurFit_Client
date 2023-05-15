import { HD } from '../style';

const HomeDetail = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { key: 1, test: 'one' },
        { key: 2, test: 'two' },
        { key: 3, test: 'three' },
        { key: 4, test: 'four' },
        { key: 5, test: 'five' },
    ];

    return (
        <>
            <HD.RoutineTitleBox>
                <HD.RoutineTitle>nSuns</HD.RoutineTitle>
            </HD.RoutineTitleBox>
            <HD.RoutineDescBox>
                <HD.OverviewBox>
                    <HD.OverviewDataTable>
                        <HD.Thead>
                            <HD.Tr>
                                <HD.Th>Program Overview</HD.Th>
                            </HD.Tr>
                            <HD.Tr>
                                <HD.JustSpacing />
                            </HD.Tr>
                        </HD.Thead>
                        <HD.Tbody>
                            <HD.Tr>
                                <HD.ContentTitle>Level</HD.ContentTitle>
                                <HD.Content>상급</HD.Content>
                            </HD.Tr>
                            <HD.Tr>
                                <HD.ContentTitle>Day Per Week</HD.ContentTitle>
                                <HD.Content>6days</HD.Content>
                            </HD.Tr>
                            <HD.Tr>
                                <HD.ContentTitle>Program Length</HD.ContentTitle>
                                <HD.Content>6weeks</HD.Content>
                            </HD.Tr>
                        </HD.Tbody>
                    </HD.OverviewDataTable>
                </HD.OverviewBox>
                <HD.RoutineSlideBox>
                    {slides.map(element => (
                        <HD.RoutineDetailBox key={element.key}>{element.test}</HD.RoutineDetailBox>
                    ))}
                </HD.RoutineSlideBox>
            </HD.RoutineDescBox>
        </>
    );
};

export default HomeDetail;
