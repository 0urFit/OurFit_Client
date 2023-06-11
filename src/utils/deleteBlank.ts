interface blankDeleteParameter {
    routineName?: string | undefined;
}

const deleteBlank = ({ routineName }: blankDeleteParameter) => {
    const regex = / /gi;

    const deletedBlankContent = routineName?.replace(regex, '');

    return deletedBlankContent;
};

export default deleteBlank;
