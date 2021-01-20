
const formatTime = (data, operator) => {
    const result =  data % operator;
    const resultFormat = result.toString();

    if(resultFormat.length < 2) {
        return `0${resultFormat}`;
    }
    return resultFormat;
}

const formatDays = (data) => {
    const result = data;
    const resultFormat = result.toString();

    if(resultFormat.length < 2) {
        return `0${resultFormat}`;
    }
    if(result > 99) {
        return `+${99}`;
    }
    return resultFormat;
}

export {
    formatTime,
    formatDays,
}