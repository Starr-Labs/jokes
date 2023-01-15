import { jokeList } from './joke-list';

export const getJokes = () => {
    //console.log(jokeList);
    return jokeList;
};

export const postJoke = (joke) => {
    jokeList.push(joke);
};

export const getJokeById = (id) => {
    const joke = jokeList.find(joke => joke.id === id);
    return joke;
};
