export interface RequestResult<T> {
    message : string;
    0 : number;
    patients : T[];
}