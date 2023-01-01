export default class percentModel{
    readonly percent: number
    private readonly MIN: number = 0
    private readonly MAX: number = 100

    constructor(
        percent: number,
    ){
        if(this.validPercent(percent) === true){
            this.percent = percent
        }
        else {
            throw new Error("Invalid Percentage Entered")
        }
    }

    validPercent = (newPercent: number) => {
        return newPercent != null && newPercent >= this.MIN && newPercent <= this.MAX
    }

}