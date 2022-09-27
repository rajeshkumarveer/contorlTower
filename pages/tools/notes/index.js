import React, { useState } from "react";
import { Card, Box , Typography } from "@mui/material";
import NoteSidebar from "../../../src/components - Copy/notes/NoteSidebar";
import NoteContent from "../../../src/components - Copy/notes/NoteContent";

function index() {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);

  return (
    <div >
      <Typography variant="h5"  color="textSecondary" sx={{ml:2}}  data-aos="zoom-in-up" > Notes</Typography>
      <Card sx={{ display: "flex", p: 0 }} data-aos="zoom-in-up" >
        <NoteSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        /> 
        <Box flexGrow={1}>
          <NoteContent toggleNoteSidebar={() => setMobileSidebarOpen(true)} />
        </Box>
      </Card>
    </div>
  );
}

export default index