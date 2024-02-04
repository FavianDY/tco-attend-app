"use client";
import "@/app/css/defaultAbsensi.css";
import "@/app/css/absensiPage.css";
import {
  AbsoluteCenter,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertEmpty } from "@/components/useAlertEmpty";
import { sheets_v4 } from "googleapis";

export type formData = {
  email: string;
  date: string;
  name: string;
  employeeStatus: string;
  squad: string;
  condition: string;
  conditionDesc: string;
  workFrom: string;
  location: string;
  workPlan: string;
};

const AbsensiPage: NextPage = () => {
  // State Input Data
  const [formData, setFormData] = useState({
    email: "",
    date: "",
    name: "",
    employeeStatus: "",
    squad: "",
    condition: "",
    conditionDesc: "",
    workFrom: "",
    location: "",
    workPlan: "",
  });

  // Event Handler Input
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Router Submit
  const absensiRouter = useRouter();

  // Event Handler Alert Empty Form & Submit
  const handleSubmit = async () => {
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );
    if (isAnyFieldEmpty) {
      return AlertEmpty();
    }
    // const response = await fetch("../api/absenSubmit.ts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (!response.ok) {
    //   throw new Error("Failed to append sheet");
    // }

    // const responseData = await response.json();

    absensiRouter.push("/absensi/success");

    // return responseData;
  };

  // Event Handler Clear Form
  const handleClearForm = () => {
    setFormData({
      email: "",
      date: "",
      name: "",
      employeeStatus: "",
      squad: "",
      condition: "",
      conditionDesc: "",
      workFrom: "",
      location: "",
      workPlan: "",
    });
  };

  return (
    <main className="main">
      <div className="inner-padding">
        <Stack direction="column" spacing={10} align="center">
          <div className="box">
            <div className="list-box-color"></div>
            <div className="box-content-1">
              <div className="title-page">
                <h1 className="title-absensi">
                  Rencana Kerja Harian Tribe TCO
                </h1>
              </div>
              <div className="capt-title-1">
                <p>
                  Karyawan dapat mengisi pada hari sebelumnya atau pada hari H
                  sebelum pukul 09.00 WIB.
                </p>
              </div>
            </div>
            <Divider opacity={1} color={"black"} />
            <div className="box-content-2">
              <div className="capt-tittle-2">
                <AbsoluteCenter bg="white" px="10"></AbsoluteCenter>
                <p style={{ color: "red" }}>* Indicates required question</p>
              </div>
            </div>
          </div>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Your Answer"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Tanggal</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Nama</FormLabel>
            <Input
              placeholder="Your Answer"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Status Pegawai</FormLabel>
            <Select
              placeholder="Select Status"
              name="employeeStatus"
              value={formData.employeeStatus}
              onChange={handleInputChange}
            >
              <option>Karyawan Tetap</option>
              <option>Digital Talent / Pro Hire</option>
              <option>Tenaga Kerja Penunjang (TKP)</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Squad</FormLabel>
            <Select
              placeholder="Select Squad"
              name="squad"
              value={formData.squad}
              onChange={handleInputChange}
            >
              <option>Tribe Leader</option>
              <option>Business Collaboration</option>
              <option>Product Onboard</option>
              <option>Business Operational</option>
              <option>Project & Platform</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Kondisi Badan Saat Ini</FormLabel>
            <Select
              placeholder="Select Status"
              name="condition"
              value={formData.condition}
              onChange={handleInputChange}
            >
              <option>Sehat</option>
              <option>Kurang Sehat (masih bisa bekerja)</option>
              <option>Sakit (perlu istirahat)</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Keterangan Kondisi Badan</FormLabel>
            <FormHelperText>
              Diisi jika kondisi badan kurang sehat atau sakit.
            </FormHelperText>
            <Textarea
              placeholder="Your Answer"
              name="conditionDesc"
              value={formData.conditionDesc}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Informasi Kerja (Flexible Work Arrangement)</FormLabel>
            <Select
              placeholder="Select Status"
              name="workFrom"
              value={formData.workFrom}
              onChange={handleInputChange}
            >
              <option>Work From Office (WFO) / Customer Visit</option>
              <option>Work From Anywhere (WFA)</option>
              <option>Cuti</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Lokasi & Kota</FormLabel>
            <FormHelperText>
              Misalnya: STO Kalibata Jakarta, MM Bonsir Jakarta, BDV Bandung,
              Rumah Depok, Unjani Cimahi.
            </FormHelperText>
            <Input
              placeholder="Your Answer"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Rencana Kerja / Aktivitas</FormLabel>
            <FormHelperText>
              Rencana kerja esok hari atau pembaharuan hari ini.
              <br />
              Jika cuti, mohon infokan periode cuti tsb. (misalnya: Cuti 29-31
              Jan 2024).
            </FormHelperText>
            <Input
              placeholder="Your Answer"
              name="workPlan"
              value={formData.workPlan}
              onChange={handleInputChange}
            />
          </FormControl>
          <div className="btn-section">
            <Button
              type="submit"
              colorScheme="red"
              variant="solid"
              onClick={handleSubmit}
              className="btn-submit"
            >
              Submit
            </Button>
            <Button
              type="reset"
              colorScheme="red"
              variant="ghost"
              className="btn-clear"
              onClick={handleClearForm}
            >
              Clear Form
            </Button>
          </div>
        </Stack>
      </div>
    </main>
  );
};

export default AbsensiPage;
