import { IJoke } from './IJoke';

export class Joke implements IJoke{
    id: string;
    joke: string;
    status: number;

    constructor(joke: IJoke) {
        if (joke) {
            this.id = joke.id;
            this.joke = joke.joke;
            this.status = joke.status;
        }
    }
}