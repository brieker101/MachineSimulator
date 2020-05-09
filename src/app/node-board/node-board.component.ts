import { Component } from '@angular/core';
import { Arrow } from '../arrow';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

export interface DialogData {
  operation: string;
}

@Component({
  selector: 'app-node-board',
  templateUrl: './node-board.component.html',
  styleUrls: ['./node-board.component.css']
})
export class NodeBoardComponent {
  svgNodes: HTMLElement[] = [];
  svgArrows: Arrow[] = [];
  constructor(public dialog: MatDialog) {}
  public firstLink = false;
  public firstPoint: MouseEvent;
  public secondPoint: MouseEvent;
  operation: string;


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { operation: this.operation}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.operation = result;
      this.linkNode(this.firstPoint, this.secondPoint);
    });
  }

  nodeFunction(e: MouseEvent) {
    e.stopPropagation();
    if (document.getElementById('value').innerText === 'add') { this.addNode(e); }
    if (document.getElementById('value').innerText === 'remove') { this.removeNode(e); }
    if (document.getElementById('value').innerText === 'link' && !this.firstLink) {
      this.firstPoint = e;
      this.firstLink = true;
    }
    else if (document.getElementById('value').innerText === 'link' && this.firstLink) {this.secondPoint = e; this.openDialog(); }
  }
  addNode(e: MouseEvent) {
    if (document.getElementById('value').innerText === 'add') {
      const element = document.getElementById('nodeBoard');
      const text = document.getElementById('nodeValue').innerText;
      console.log(text);
      element.innerHTML += '<svg><g><circle cx="' + e.clientX.toString() + '" cy="' + (e.clientY - 75).toString() + '" fill="#1f77b4" r="40"></circle><text fill="white" x="' + e.clientX + '" y="' + (e.clientY - 75).toString() + '" font-size="20" text-anchor="middle" alignment-baseline="central">' + text + '' + this.svgNodes.length.toString() + '</text></g></svg>';
      this.svgNodes.push(document.getElementById((this.svgNodes.length - 1).toString()));
    }
  }
  linkNode(e: MouseEvent, d: MouseEvent) {
    const element = document.getElementById('nodeBoard');
    const textX = (d.clientX + e.clientX - 100) / 2;
    const textY = (d.clientY + e.clientY - 100) / 2;

    // tslint:disable-next-line: max-line-length
    element.innerHTML += '<svg height="100%" width="100%"><text font-size="18px" text-anchor="middle" x="' + textX + '" y="' + textY + '">' + this.operation.toString() + '</text><defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" /></marker></defs><line marker-end="url(#arrowhead) "visibility="visible" x1="' + e.clientX.toString() + '" y1="' + (e.clientY - 75).toString() + '" x2="' + d.clientX.toString() + '" y2="' + (d.clientY - 75).toString() + '" style="fill:black; stroke:black; stroke-width:2;" /></svg>';
    this.firstLink = false;
  }
  removeNode(e) {
    if (e.target === document.getElementById('nodeBoard')) { }
    else { e.target.remove(); }

  }
}