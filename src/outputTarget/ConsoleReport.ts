import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  run(report: string): void {
    console.log(report);
  }
}
