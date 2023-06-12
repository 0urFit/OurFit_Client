type SelectType = {
    value: string;
    label: string;
};

type RoutineType = {
    weeks: number;
    days: DaysType[];
};

type DaysType = {
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

export type { SelectType, RoutineType, ExercisesType };
