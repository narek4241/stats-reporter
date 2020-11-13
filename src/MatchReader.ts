import { DataReader } from './DataReader';
import { MatchResult } from './MatchResult';
import { stringDateToDate } from './utils';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  data: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map((row: string[]) => {
      return [
        stringDateToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
