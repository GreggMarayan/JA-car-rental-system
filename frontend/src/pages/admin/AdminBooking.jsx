import AdminSideBar from "../../ui/components/AdminSideBar";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import MobileAppBar from "../../ui/components/MobileAppBar";

import { Button, Typography } from "@mui/material";
// import { AddIcon } from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import ManageUserHeader from "../../ui/components/header/ManageUserHeader";
import ManageUserTable from "../../ui/components/table/ManageUserTable";

function AdminBooking() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMobile = useMediaQuery("(max-width: 1024px)");

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("CUSTOMER");

  useEffect(() => {
    setLoading(true);

    fetch("https://68bd9bc5227c48698f84f2ce.mockapi.io/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const formattedData = data.map((item) => ({
          ...item,
          status: item.status ? "Active" : "Inactive",
        }));
        setRows(formattedData);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <Typography>Loading data...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
        color="error.main"
      >
        <Typography>{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {isMobile && (
        <MobileAppBar title="Dashboard" onMenuClick={handleDrawerToggle} />
      )}

      <AdminSideBar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 16rem)`,
          ml: { sm: "16rem" },
          // mt: { xs: "56px", sm: 0 }, // Match AppBar height on mobile
          height: { xs: "calc(100vh - 56px)", sm: "100vh" },
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* {                                     ADD COMPONENTS HERE                                       } */}

        <Box
          sx={{
            width: "100%",
            minWidth: "100%",
            maxWidth: "1280px",
            display: "flex",
            flexDirection: "column",
            p: { xs: 1, sm: 1, md: 1, lg: 1 },
            backgroundColor: "transparent",
            height: "auto",
            minHeight: { xs: "auto", sm: "auto" },
            boxSizing: "border-box",
          }}
        >
          <title>Table</title>
          <ManageUserHeader activeTab={activeTab} onTabChange={setActiveTab} />
          <Box
            sx={{
              width: "100%",
              minWidth: "100%",
              maxWidth: "1280px",
              display: "flex",
              flexDirection: "column",
              p: { xs: 1, sm: 2, md: 2, lg: 2 },
              backgroundColor: "#f9f9f9",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 4px 0 6px -1px rgba(0, 0, 0, 0.1), -4px 0 6px -1px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "auto",
              minHeight: { xs: "auto", sm: "auto" },
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  color: "#000",
                  "@media (max-width: 600px)": {
                    fontSize: "1.8rem",
                  },
                }}
              >
                {activeTab}
              </Typography>
              {activeTab === "STAFF" || activeTab === "DRIVER" ? (
                <Button
                  variant="outlined"
                  sx={{
                    color: "#000",
                    p: 1,
                    height: 36,
                    border: "none",
                    borderRadius: 5,
                    backgroundColor: "#d9d9d9",
                    "&:hover": {
                      backgroundColor: "#c10007",
                      color: "#fff",
                      fontWeight: 600,
                      borderColor: "#4a4a4a",
                      boxShadow: "none",
                    },
                    "@media (max-width: 600px)": {
                      height: 28,
                    },
                  }}
                >
                  {/* <AddIcon /> */}
                  Add New {activeTab}
                </Button>
              ) : null}
            </Box>
            <ManageUserTable
              activeTab={activeTab}
              rows={rows}
              loading={loading}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminBooking;
