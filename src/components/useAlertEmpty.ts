import Swal from "sweetalert2";

export function AlertEmpty() {
  Swal.fire({
    // position: "top-end",
    icon: "error",
    title: "Tidak Bisa Mengisi Form Kosong",
    text: "Mohon lengkapi form terlebih dahulu!",
    showConfirmButton: false,
    timer: 2000,
  });
}

export default AlertEmpty;
