type DetailRoutineType = {
    data: {
        result: ResultType;
    };
};

type ResponseResult = {
    routineName: string;
    period: number;
    weeks: number;
    days: daysType;
};

type ResultType = ResponseResult[];

type daysType = [];

export type { DetailRoutineType, ResultType, daysType };
