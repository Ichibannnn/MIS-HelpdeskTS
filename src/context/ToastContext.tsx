import { Alert, AlertTitle, Snackbar } from "@mui/material";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type ToastSeverity = "success" | "error" | "warning" | "info";

interface ToastState {
  open: boolean;
  title: string;
  message: string;
  severity: ToastSeverity;
}

interface ToastContextType {
  showToast: (title: string, message: string, severity: ToastSeverity) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used with ToastProvider");
  }

  return context;
};

const INTIIAL_STATE: ToastState = {
  open: false,
  title: "",
  message: "",
  severity: "success",
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastState>(INTIIAL_STATE);

  const showToast = useCallback(
    (title: string, message: string, severity: ToastSeverity = "success") => {
      setToast({ open: true, title, message, severity });
    },
    [],
  );

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Snackbar
        open={toast.open}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={closeToast}
      >
        <Alert
          severity={toast.severity}
          variant="filled"
          onClose={closeToast}
          sx={{ width: "100%", color: "#fff" }}
        >
          {toast.title && <AlertTitle>{toast.title}</AlertTitle>}
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};
