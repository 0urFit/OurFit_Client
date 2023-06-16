type OverviewInformationType = {
    programLength: number;
    dayPerWeek: number;
};

type DetailRoutineType = {
    data: {
        result: resultType;
    };
};

type resultType = [{ period: number; weeks: number; days: daysType }];

type daysType = [];

export type { OverviewInformationType, DetailRoutineType, resultType, daysType };
