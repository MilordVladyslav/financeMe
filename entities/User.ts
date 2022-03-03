import TrackedMonth from "./TrackedMonth";
import genUniqueId from "../utils/genUniqueId";
import Month from "../types/Month";

class User {
  private name: string
  private id: string
  trackedMonths: TrackedMonth[]
  constructor(name: string, trackedMonths: TrackedMonth[]) {
    this.name = name
    this.trackedMonths = trackedMonths
    this.id = genUniqueId()
  }
  getName(): string {
    return this.name
  }
  getId(): string {
    return this.id
  }
  updateName(name: string): void {
    this.name = name
  }
  getTrackedMonths(): TrackedMonth[] {
    return this.trackedMonths
  }
  printUserInfo(): void {
    console.log(`name: ${this.name}`);
  }
  getTrackedMonthByDate(
    month: Month,
    year: number,
  ): TrackedMonth {
    return this
      .getTrackedMonths()
      .find(trackedMonth => (
        trackedMonth.getMonth() === month
        && trackedMonth.getYear() === year
      ));
  }
}

export default User
