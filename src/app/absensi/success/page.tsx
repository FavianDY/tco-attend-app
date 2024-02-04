"use client";
import "@/app/css/defaultAbsensi.css";
import "@/app/css/successPage.css";
import { AbsoluteCenter, Divider, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <main>
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
                  Terima kasih sudah mengisi absen hari ini, tetap semangat!✨
                </p>
              </div>
            </div>
            <Divider opacity={1} color={"black"} />
            <AbsoluteCenter bg="white" px="10"></AbsoluteCenter>
            <div className="box-content-2">
              <div className="capt-tittle-2">
                <ChakraLink as={Link} href="/absensi" color="blue.500">
                  Submit another response <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    </main>
  );
};

export default SuccessPage;
