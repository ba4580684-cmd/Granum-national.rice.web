// import LeadForm from "@/components/LeadForm";

// export default function StartPage() {
//   return <LeadForm />;
// }
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/home");
}