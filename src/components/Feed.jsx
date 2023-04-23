import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { SideBar } from "./SideBar";
import { Videos } from "./Videos";

function Feed() {
  const [selectedCategory,setSelectedCategory] = useState(''); 
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      const data = fetchFromAPI(`search?part=snippet&q=$
       {selectedCategory}`)
       .then((data) => setVideos(data.items))
  },[selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx: "column", sm: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", sm: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, sm: 2 },
        }}
      >
        <SideBar
           selectedCategory = {selectedCategory}
           setSelectedCategory = {setSelectedCategory}
        ></SideBar>

        <Typography
          className="copyRight"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Gaurav K.
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY:'auto', height:'90vh' ,flex:2}}>
        <Typography
          variant="h5"
          fontWeight='bold' mb={2} sx={{
            color :'white' 
          }}>
          {selectedCategory} <span style={{color : '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={[videos]}/>
      </Box>
    </Stack>
  );
}

export default Feed;
