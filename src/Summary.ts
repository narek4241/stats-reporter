import { MatchData } from './MatchData';

import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './outputTarget/ConsoleReport';
import { HtmlReport } from './outputTarget/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  run(report: string): void;
}

export class Summary {
  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputReport: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputReport.run(report);
  }
}
