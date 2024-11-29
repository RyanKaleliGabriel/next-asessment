import toast from "react-hot-toast";

export const showToast = (type: string, message: string) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warn":
      toast(`⚠️ ${message}`, {
        style: {
          border: "1px solid #FFA500",
          padding: "6px",
          fontSize: "12px",
          color: "#FFA500",
        },
        iconTheme: {
          primary: "#FFA500",
          secondary: "#FFFAEE",
        },
      });
      break;
    case "info":
      toast(`ℹ️ ${message}`, {
        style: {
          border: "1px solid #C63C51",
          padding: "6px",
          fontSize: "12px",
          color: "#C63C51",
        },
        iconTheme: {
          primary: "#C63C51",
          secondary: "#FFFAEE",
        },
      });
  }
};
