"use client"

const { useRouter } = require("next/navigation")
const { useEffect } = require("react")

const Page = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/absensi');
    }, [router]);
    return null;
};

export default Page;