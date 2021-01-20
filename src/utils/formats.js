
const formatTime = (data, operator) => {
    const r =  data % operator;
    const rF = r.toString();

    if(rF.length < 2) {
        return `0${rF}`;
    }
    return rF;
}

const formatDays = (data) => {
    const r = data;
    const rF = r.toString();

    if(rF.length < 2) {
        return `0${rF}`;
    }
    if(r > 99) {
        return `+${99}`;
    }
    return rF;
}

export {
    formatTime,
    formatDays,
}