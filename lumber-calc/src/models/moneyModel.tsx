import { NumberLiteralType } from "typescript";

export default class moneyModel{
    readonly money: number
    private readonly MIN: number = 0
    private readonly MAX: number = 1000000000000

    constructor(
        money: number,
    ){
        if(this.validMoney(money) === true){
            this.money = parseFloat(money.toFixed(2))
        }
        else {
            throw new Error("Invalid Money Value")
        }
    }
        validMoney = (newMoney: number) => {
            return newMoney != null && newMoney > this.MIN && newMoney <= this.MAX
        }
    } 