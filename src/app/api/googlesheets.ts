import { google } from "googleapis";
import { sheets_v4 } from "googleapis/build/src/apis/sheets";

const apiGoogleapis = async (): Promise<sheets_v4.Schema$ValueRange> => {
  const auth = await google.auth.getClient({
    scopes: [process.env.SHEET_API_URI as string],
  });

  const sheets = await google.sheets({
    version: "v4",
    auth,
  });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID as string,
    range: "format_response",
  });

  console.log(response.data);
  return response.data;
};

export default apiGoogleapis;
