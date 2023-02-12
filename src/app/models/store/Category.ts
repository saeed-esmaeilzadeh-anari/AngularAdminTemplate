import {CategoryFeature} from './CategoryFeature';
export class Category {
    constructor(public  id:number = null,
        public categoryName:string = null,
        public description:string = null,
        public isActive:boolean = null,
        public features:CategoryFeature[]=[]) {}
  
}