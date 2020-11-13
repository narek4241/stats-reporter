import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[1] === this.team && match[5] === MatchResult.AwayWIn) {
        wins++;
      }
    }

    return `The ${this.team} team has ${wins} wins`;
    // return `html tags here`
  }
}
