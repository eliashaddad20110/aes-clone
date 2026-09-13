import { ReactNode } from "react";
import AdminLayout from "./components/AdminLayout";

export default function AdminLayout_Root({ children }: { children: ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
