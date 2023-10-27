type SelectType = {
    value: string;
    label: string;
};

type RoutineType = {
    weeks: number;
    fewTime: number;
    level: number;
    period: number;
    routineName: string;
    category: string;
    days: DaysType[];
};

type DaysType = {
    day: string;
    exercises: ExercisesType[];
};

type TodayExercisesType = {
    day: string;
    exercises: ExercisesType[];
};

type ExercisesType = {
    name: string;
    sets: SetsType[];
};

type SetsType = {
    sequence: number;
    weight: number;
    reps: number;
    complete: boolean;
    id: number;
};

type SaveRoutineInfo = {
    category?: string;
    fewTime?: number;
    period?: number;
    days?: [
        {
            day: string;
            exercises: [];
        },
    ];
};

type RoutineItemType = {
    sequence: number;
    weight: number;
    reps: number;
    id: number;
};

export type { SelectType, RoutineType, TodayExercisesType, SaveRoutineInfo, RoutineItemType };
