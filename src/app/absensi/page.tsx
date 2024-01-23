"use client"
import "./absensi.css"
import { AbsoluteCenter, Box, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select, Stack, Textarea } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { color } from "framer-motion"
import { NextPage } from "next"
import { useState } from "react"

const AbsensiPage: NextPage = () => {
    const [date, setDate] = useState('');
    const [gmail, setGmail] = useState('');
    const [name, setName] = useState('');
    const [employee, setEmployee] = useState('');
    const [squad, setSquad] = useState('');
    const [condition, setCondition] = useState('');
    const [sick, setSick] = useState('');
    const [work, setWork] = useState('');
    const [leave, setLeave] = useState('');
    const [location, setLocation] = useState('');
    const [activity, setActivity] = useState('');

    return(
        <main className="main">
            <div className="inner-padding">
                <Stack direction='column' spacing={10} align='center'>
                    <div className="box">
                        <div className="title-page">
                            <h1 className="title-absensi">Rencana Kerja Harian Tribe TCO</h1>
                        </div>
                        <div className="capt-title">
                            <p>Karyawan dapat mengisi pada hari sebelumnya atau pada hari H sebelum pukul 09.00 WIB.</p>
                        </div>
                        <Divider paddingY='10px'/>
                        <AbsoluteCenter bg='white' px='10'></AbsoluteCenter>
                        <p style={{color: "red"}}>* Indicates required question</p>
                    </div>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Your Answer' />
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel>Tanggal</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Nama</FormLabel>
                        <Input placeholder='Your Answer' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Status Pegawai</FormLabel>
                        <Select placeholder='Select Status'>
                            <option>Karyawan Tetap</option>
                            <option>Digital Talent / Pro Hire</option>
                            <option>Tenaga Kerja Penunjang (TKP)</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Squad</FormLabel>
                        <Select placeholder='Select Squad'>
                            <option>Tribe Leader</option>
                            <option>Business Collaboration</option>
                            <option>Product Onboard</option>
                            <option>Business Operational</option>
                            <option>Project & Platform</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Kondisi Badan Saat Ini</FormLabel>
                        <Select placeholder='Select Status'>
                            <option>Sehat</option>
                            <option>Kurang Sehat (masih bisa bekerja)</option>
                            <option>Sakit (perlu istirahat)</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Keterangan Kondisi Badan</FormLabel>
                        <FormHelperText>Diisi jika kondisi badan kurang sehat atau sakit.</FormHelperText>
                        <Textarea placeholder='Your Answer' />                </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Informasi Kerja (Flexible Work Arrangement)</FormLabel>
                        <Select placeholder='Select Status'>
                            <option>Work From Office (WFO) / Customer Visit</option>
                            <option>Work From Anywhere (WFA)</option>
                            <option>Cuti</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Lokasi & Kota</FormLabel>
                        <FormHelperText>Misalnya: STO Kalibata Jakarta, MM Bonsir Jakarta, BDV Bandung, Rumah Depok, Unjani Cimahi.</FormHelperText>
                        <Input placeholder='Your Answer' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Rencana Kerja / Aktivitas</FormLabel>
                        <FormHelperText>Rencana kerja esok hari atau pembaharuan hari ini.<br />Jika cuti, mohon infokan periode cuti tsb. (misalnya: Cuti 29-31 Jan 2024).</FormHelperText>
                        <Input placeholder='Your Answer' />
                    </FormControl>
                    <div className="btn-submit">
                        <Button colorScheme='red' variant='solid'>
                            Submit
                        </Button>
                        <Button colorScheme='red' variant='ghost'>
                            Clear Form  
                        </Button>
                    </div>
                </Stack>
            </div>
        </main>
    );
};

export default AbsensiPage;