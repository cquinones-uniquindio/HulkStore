import { SafeResourceUrl } from '@angular/platform-browser';

export class Item {
    id:number;
    name:string;
    picture: SafeResourceUrl;
    type: string;
    description: string;
    units:number;
    amount:number;

}