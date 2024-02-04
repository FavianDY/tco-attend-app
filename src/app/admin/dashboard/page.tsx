"use client";
import {
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import "../../css/dashboardPage.css";
import { ChartBarKaryawan } from "@/components/charts/barChart";
import { ChartPieKaryawan } from "@/components/charts/pieChart";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AdminDashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        signIn();
      }
    }
  }, [router, session, session?.user.role, status]);
  const setTanggal = "17 Juli 2024";
  const jmlAbsensi = 50;
  return (
    <main>
      <div className="">
        <Stack p={5}>
          <div className="breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem>
                <Text>Admin</Text>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/admin/dashboard">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Divider p={2} zIndex={-1} />
          <div className="container-summary">
            <div className="container-heading">
              <Heading paddingBottom={"1cm"}>Absensi TCO</Heading>
              <Text fontSize="xl">
                Terhitung jumlah karyawan yang asben pada tanggal {setTanggal}{" "}
                adalah sebanyak {jmlAbsensi} orang.
              </Text>
            </div>
            <div className="container-main">
              <Heading as="h3" size="lg">
                Summary
              </Heading>
              <Divider py={2} zIndex={-1} />
              <div className="chart">
                <div className="bar-chart-container">
                  <Heading as="h4" size="md">
                    Bar Chart
                  </Heading>
                  <div className="bar-chart">
                    <ChartBarKaryawan />
                  </div>
                </div>
                <div className="pie-chart-container">
                  <Heading as="h4" size="md">
                    Pie Chart
                  </Heading>
                  <div className="pie-chart">
                    <ChartPieKaryawan />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    </main>
  );
}
