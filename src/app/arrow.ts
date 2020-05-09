export class Arrow {
    constructor(
        private initial: number,
        private end: number,
        private read: any,
        private write: any,
        private move: any
    ) { }
    public getInitial(): number {
        return this.initial;
    }
    public getEnd(): number {
        return this.end;
    }
    public getRead(): any {
        return this.read;
    }
    public getWrite(): any {
        return this.write;
    }
    public getMove(): any {
        return this.move;
    }
}
