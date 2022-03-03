import genUniqueId from "../utils/genUniqueId"
import truncate from '../utils/truncate'
class Expense {
  private label: string
  private amount: number
  private date: Date
  private id: string
  constructor(
    label: string,
    amount: number,
    date: Date | string
  ) {
    this.updateLabel(label);
    this.updateAmount(amount)
    this.updateDate(date)
    this.id = genUniqueId()
  }
  getId(): string {
    return this.id
  }
  getLabel(): string {
    return this.label
  }
  updateLabel(label: string): void {
    this.label = truncate(label, 20);
  }
  getAmount(): number {
    return this.amount
  }
  updateAmount(amount: number): void {
    this.amount = amount
  }
  getDate(): Date {
    return this.date
  }
  updateDate(date: Date | string): void {
    this.date = new Date(date)
  }
}

export default Expense