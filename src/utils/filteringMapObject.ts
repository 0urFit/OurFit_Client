type ParameterType = {
    day: string;
    issuccess: boolean;
};

type ConvertToMapObjectType = (data: ParameterType[]) => Map<string, boolean>;

export const filteringMapObject: ConvertToMapObjectType = data => {
    const routineIsSuccessMapObj = new Map();

    for (const item of data) {
        routineIsSuccessMapObj.set(item.day, item.issuccess);
    }

    return routineIsSuccessMapObj;
};
