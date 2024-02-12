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
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { FormEvent, SyntheticEvent, useState } from "react";
import { AlertEmpty } from "@/components/useAlertEmpty";
import { Absensi, PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

const AbsensiPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [employeeStatus, setEmployeeStatus] = useState("");
  const [squad, setSquad] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionDesc, setConditionDesc] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [location, setLocation] = useState("");
  const [workPlan, setWorkPlan] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      // const response = await axios.post("http://localhost:3000/api/submit", {
      const response = {
        email: String(email),
        date: Date(),
        name: String(name),
        employeeStatus: String(employeeStatus),
        squad: String(squad),
        condition: String(condition),
        conditionDesc: String(conditionDesc),
        workFrom: String(workFrom),
        location: String(location),
        workPlan: String(workPlan),
      };
      const submittedData = {
        email: email,
        date: date,
        name: name,
        employeeStatus: employeeStatus,
        squad: squad,
        condition: condition,
        conditionDesc: conditionDesc,
        workFrom: workFrom,
        location: location,
        workPlan: workPlan,
      };
      setEmail("");
      setDate("");
      setName("");
      setEmployeeStatus("");
      setSquad("");
      setCondition("");
      setConditionDesc("");
      setWorkFrom("");
      setLocation("");
      setWorkPlan("");
      router.push("/absensi/success");
      return submittedData;
    } catch (error) {
      console.log(error);
    }
  };
  const handleClearForm = () => {
    setEmail("");
    setDate("");
    setName("");
    setEmployeeStatus("");
    setSquad("");
    setCondition("");
    setConditionDesc("");
    setWorkFrom("");
    setLocation("");
    setWorkPlan("");
  };

  return (
    <main className="main">
      <div className="inner-padding">
        <form action="" onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Nama</FormLabel>
              <Input
                placeholder="Your Answer"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Status Pegawai</FormLabel>
              <Select
                placeholder="Select Status"
                name="employeeStatus"
                value={employeeStatus}
                onChange={(e) => setEmployeeStatus(e.target.value)}
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
                value={squad}
                onChange={(e) => setSquad(e.target.value)}
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
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                <option>Sehat</option>
                <option>Kurang Sehat (masih bisa bekerja)</option>
                <option>Sakit (perlu istirahat)</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Keterangan Kondisi Badan</FormLabel>
              <FormHelperText>
                Diisi jika kondisi badan kurang sehat atau sakit. <br />
                Jika kondisi sehat cukup ketikan sehat
              </FormHelperText>
              <Input
                placeholder="Your Answer"
                name="conditionDesc"
                value={conditionDesc}
                onChange={(e) => setConditionDesc(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Informasi Kerja (Flexible Work Arrangement)</FormLabel>
              <Select
                placeholder="Select Status"
                name="workFrom"
                value={workFrom}
                onChange={(e) => setWorkFrom(e.target.value)}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                value={workPlan}
                onChange={(e) => setWorkPlan(e.target.value)}
              />
            </FormControl>

            <div className="btn-section">
              <Button
                type="submit"
                colorScheme="red"
                variant="solid"
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
        </form>
      </div>
    </main>
  );
};

export default AbsensiPage;
