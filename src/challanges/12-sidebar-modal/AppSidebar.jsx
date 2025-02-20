import { ModalProvider } from "./Context";
import SidebarModal from "./SidebarModal";

export default function AppSidebar() {
  return (
    <ModalProvider>
      <SidebarModal />
    </ModalProvider>
  );
}
