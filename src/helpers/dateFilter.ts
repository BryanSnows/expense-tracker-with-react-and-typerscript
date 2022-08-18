import { Item } from "../types/item";


export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListMonth = (list: Item[], date: string) => {

}