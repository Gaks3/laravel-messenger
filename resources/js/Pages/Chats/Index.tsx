import ContentEmpty from "@/Components/Chats/ContentEmpty";
import Sidebar from "@/Components/Chats/Sidebar";
import AppLayout from "@/Layouts/AppLayout";
import SidebarMini from "@/Layouts/Partials/SidebarMini";

export default function Chats() {
  return (
    <AppLayout title="Chats">
      <SidebarMini />
      <Sidebar />
      <ContentEmpty />
    </AppLayout>
  );
}
