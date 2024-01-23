import { google } from "googleapis";
import { sheets } from "googleapis/build/src/apis/sheets";

export const auth = async (): Promise<void> => {
  const auth = await google.auth.getClient({
    scopes: [process.env.SHEET_API_URI as string],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  // const response = await sheets.spreadsheets.values.get({
  //   spreadsheetId: process.env.SHEET_ID as string,
  //   range: "format_response",
  // });
};

export default sheets;