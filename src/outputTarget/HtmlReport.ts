import fs from 'fs';
import { OutputTarget } from './../Summary';

export class HtmlReport implements OutputTarget {
  run(report: string): void {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <body>
        <h1>Report Analysis</h1>
        <p>${report}</p>
      </body>
    </html>
    `;

    const file = fs.writeFileSync('report.html', html);
  }
}
