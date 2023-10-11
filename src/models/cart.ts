import { Product } from "./product"

export interface CartItem {
    product : Product
    size : "s"|"m"|"l"
    quantity : number
}