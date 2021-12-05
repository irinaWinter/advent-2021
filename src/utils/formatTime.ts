const formatTime = (time: string): string => {
    return time.length < 1 ? `00` : time.length < 2 ? `0${time}` : time;
};

export default formatTime;