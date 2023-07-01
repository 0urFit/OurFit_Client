type DetailRoutineType = {
    data: {
        result: resultType;
    };
};

type resultType = [{ period: number; weeks: number; days: daysType }];

type daysType = [];

export type { DetailRoutineType, resultType, daysType };
