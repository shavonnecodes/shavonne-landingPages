import { ICat } from './ICat';

export class Cat implements ICat{
    file: string;

    constructor(cat: ICat) {
        if (cat) {
            this.file = cat.file;
        }
    }
}