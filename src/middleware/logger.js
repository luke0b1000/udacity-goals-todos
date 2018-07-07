const logger = store => next => action => {
    console.group(action.type);
    console.log("The action", action);
    const result = next(action);
    console.log("The new state is ", store.getState());
    console.groupEnd();
    return result; //  Questiion WHAT is the point of this line?
};

export default logger;
