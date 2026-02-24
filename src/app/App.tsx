import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AppointmentModalProvider } from "./contexts/appointment-modal-context";

export default function App() {
  return (
    <AppointmentModalProvider>
      <RouterProvider router={router} />
    </AppointmentModalProvider>
  );
}
