export class Node {
    constructor(
        private id: number,
        // private nextNodes: Arrow[],
    ){}
    public getId(): number{
        return this.id;
    }
    /*public getNextNodes(): Arrow[]{
        return this.nextNodes;
    }
    public addNextNode(next: Arrow): void{
        this.nextNodes.push(next);
    }
    public removeNextNode(remove: Arrow): void{
        const finder: number = this.nextNodes.indexOf(remove);
        let tempList: Arrow[];
        tempList.concat( this.nextNodes.slice(0, finder-1), this.nextNodes.slice(finder, this.nextNodes.length - 1));
        this.nextNodes = tempList;
    }*/

}
