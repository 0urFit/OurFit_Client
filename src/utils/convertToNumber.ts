export const convertToNumber = (routineId: string, progressWeek: string) => {
    return { id: parseInt(routineId), week: parseInt(progressWeek) };
};
