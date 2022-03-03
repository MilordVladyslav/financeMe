import genUniqueId from "../utils/genUniqueId";
import truncate from "../utils/truncate";
import Expense from "./Expense";
import Category from "../enums/Category";
class Budget {
  private label: string
  private limit: number
  private id: string
  private category: Category
  private expenses: Expense[]
  constructor(
    category: Category,
    label: string,
    limit: number,
    expenses: Expense[]
  ) {
    this.updateLimit(limit)
    this.updateLabel(label)
    this.updateCategory(category)
    this.id = genUniqueId()
    this.expenses = expenses
  }
  getId(): string {
    return this.id
  }
  getLabel(): string {
    return this.label
  }
  updateLabel(label: string) {
    this.label = truncate(label, 15)
  }
  getLimit(): number {
    return this.limit
  }
  updateLimit(limit: number): void {
  this.limit = limit
  }
  updateCategory(category: Category) : void {
    this.category = category
  }
  getExpenses(): Expense[] {
    return this.expenses
  }
  getExpenseTotal(): number {
    return this
      .getExpenses()
      .reduce((sum, expense) => sum + expense.getAmount(), 0)
  }
  getIsOverLimit(): boolean {
    return this.getExpenseTotal() > this.getLimit()
  }
}

export default Budget