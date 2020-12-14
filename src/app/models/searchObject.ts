import {Room} from "../../typescript-angular-client-generated";
import {StaffShift} from "../../typescript-angular-client-generated";

export interface SearchObject {
    sortByName: boolean,
    firstName?: string,
    name?: string,
    phone?:string,
    leftAt?:string,
    arrivedAt?:string,
    rom?: Room,
    shift?: StaffShift,
    address?: string,
    number?: number,
}
