"use client";
import {
  Stack,
  Divider,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  Button,
} from "@chakra-ui/react";
// import { ChartKaryawan } from "@/components/charts/barChart";
// import { ChartPieKaryawan } from "@/components/charts/pieChart";
import "../../../css/monthlySumPage.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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

  return (
    <main>
      <Stack p={5} spacing={5}>
        <Breadcrumb>
          <BreadcrumbItem>
            <Text>Admin</Text>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/admin/dashboard/daily_summary">
              Monthly Summary
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Divider />
        <div className="container-summary">
          <div className="container-heading">
            <Heading paddingBottom="1cm">Monthly Summary</Heading>
            <Divider py={1} />
          </div>
          <div className="container-main">
            <div className="chart">
              <div className="button-sum">
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="month"
                  className="date-input"
                />
                <Button colorScheme="teal" variant="solid">
                  Summary
                </Button>
              </div>
              <div className="sum-field-container">
                <div className="sum-field">
                  <Text
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    fontStyle={"italic"}
                    color={"gray.500"}
                  >
                    Data Tidak Tersedia
                  </Text>
                </div>
              </div>
              <div className="download-btn">
                <Button colorScheme="teal" variant="solid">
                  Download as XLS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </main>
  );
}
