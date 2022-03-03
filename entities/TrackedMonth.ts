import Month from "../types/Month"
import Budget from "./Budget"
class TrackedMonth {
  private month: Month
  private year: number
  private budgets: Budget[]
  constructor(
    month: Month,
    year: number,
    budgets: Budget[]
  ) {
    this.updateMonth(month)
    this.updateYear(year)
    this.budgets = budgets
  }
  getMonth(): Month {
    return this.month
  }
  updateMonth(month: Month): void {
    this.month = month
  }
  getYear(): number {
    return this.year
  }
  updateYear(year: number): void {
    this.year = year
  }
  getBudgets(): Budget[] {
    return this.budgets
  }
}

export default TrackedMonth