type ParameterType = {
    day: string;
    exercises: Array<object>;
};

type ConvertToMapObjectType = (data: ParameterType[]) => Map<string, []>;

export const convertToMapObject: ConvertToMapObjectType = data => {
    const routineInfoMapObj = new Map();

    for (const item of data) {
        routineInfoMapObj.set(item.day, item.exercises);
    }

    return routineInfoMapObj;
};
