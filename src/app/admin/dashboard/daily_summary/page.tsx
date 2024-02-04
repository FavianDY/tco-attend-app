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
import "../../../css/dailySumPage.css";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  console.log(session);
  console.log(status);
  useEffect(() => {
    if (status === "unauthenticated") {
      // router.push("/login");
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
              Daily Summary
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Divider zIndex={-1} />
        <div className="container-summary">
          <div className="container-heading">
            <Heading paddingBottom="1cm">Daily Summary</Heading>
            <Divider py={1} />
          </div>
          <div className="container-main">
            <div className="chart">
              <div className="button-sum">
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="date"
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
            </div>
          </div>
        </div>
      </Stack>
    </main>
  );
}
