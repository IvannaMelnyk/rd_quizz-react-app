export const incrementScore = () => {
return {
    type: 'INCREMENT_SCORE'};
};

export const setCurrentQuestion = (questionIndex) => {
return {
    type: 'SET_CURRENT_QUESTION',
    payload: questionIndex};
};

export const setShowScore = (value) => {
return {
    type: 'SET_SHOW_SCORE',
    payload: value};
};
