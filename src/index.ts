// kinda great (reusable) logic behind the scenes
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
// console report
const summary = Summary.winsAnalysisWithConsoleReport('Man United');
// html report
// const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.data);
