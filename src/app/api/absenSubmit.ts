import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import apiGoogleapis from "./googlesheets";
import { formData } from "../absensi/page";
import { error } from "console";

export default async function absenSubmit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }
  const body = req.body as formData;

  try {
    // Auth Google
    const auth = await google.auth.getClient({
      scopes: [process.env.SHEET_API_URI as string],
    });
    const sheets = await google.sheets({
      version: "v4",
      auth,
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID as string,
      range: "Sheet1!A1:J1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.email,
            body.date,
            body.name,
            body.employeeStatus,
            body.squad,
            body.condition,
            body.conditionDesc,
            body.workFrom,
            body.location,
            body.workPlan,
          ],
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e: any) {
    return res.status(500).json({ message: "Something went wrong" });
  }
}
