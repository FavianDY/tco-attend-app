import { PrismaClient } from "@prisma/client";
import type { Absensi } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body: Absensi = await request.json();
  console.log(body);
  const absensi = await prisma.absensi.create({
    data: {
      id: body.id,
      createdAt: body.createdAt,
      email: body.email,
      date: body.date,
      name: body.name,
      employeeStatus: body.employeeStatus,
      squad: body.squad,
      condition: body.condition,
      conditionDesc: body.conditionDesc,
      workFrom: body.workFrom,
      location: body.location,
      workPlan: body.workPlan,
    },
  });
  return NextResponse.json(absensi, { status: 200 });
};

// pages/api/submit.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const {
//         email,
//         date,
//         name,
//         employeeStatus,
//         squad,
//         condition,
//         conditionDesc,
//         workFrom,
//         location,
//         workPlan,
//       } = req.body;

// Simpan data ke database menggunakan Prisma
//       const newAbsensi = await prisma.absensi.create({
//         data: {
//           email,
//           date,
//           name,
//           employeeStatus,
//           squad,
//           condition,
//           conditionDesc,
//           workFrom,
//           location,
//           workPlan,
//         },
//       });

//       // Kirim balasan ke frontend
//       res
//         .status(201)
//         .json({ message: "Data berhasil disimpan", data: newAbsensi });
//     } catch (error) {
//       console.error("Error saat menyimpan data:", error);
//       res
//         .status(500)
//         .json({ message: "Terjadi kesalahan saat menyimpan data" });
//     }
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }
