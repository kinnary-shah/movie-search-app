import { BehaviorSubject, Observable } from "rxjs";

export class CartItems {
    private eventSubject: BehaviorSubject<string> = new BehaviorSubject(null);
    events$: Observable<string> = this.eventSubject.asObservable();
    title :String;
    qunatity: number;
    imdbID:string;
    Poster:string;


sendCmd(cmd: string) {
    this.eventSubject.next(cmd);
}
}