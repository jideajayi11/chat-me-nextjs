import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Home.module.css'
import { useState } from 'react';

const MenuBar = (): JSX.Element => {
  const [showChatList, setShowChatList] = useState(false);

  const toggleChatList = () => {
    setShowChatList(prev => !prev);
  };

  return (
    <>
      <Stack direction="row" justifyContent={"space-between"} mx={6}>
        <MenuIcon sx={{ marginTop: "20px" }} onClick={toggleChatList} />
        <h2>Chat-me</h2>
      </Stack>
      <Divider sx={{ boxShadow: "0 5px 2px #eeeeee" }} />
      {
        showChatList &&
        <Box sx={{ backgroundColor: "#ffffff", width: "200px", position: "fixed", zIndex: "1" }} pb={3} pl={1}>
          <h4>Chat List</h4>
          <Stack spacing={1} justifyContent={"space-around"} divider={<Divider />}>
            <div>gfdd</div>
            <div>jhgf</div>
            <div>nbv</div>
            <div>gfdd</div>
            <div>jhgf</div>
            <div>nbv</div>
            <div>gfdd</div>
            <div>jhgf</div>
            <div>nbv</div>
          </Stack>
        </Box>
      }
    </>
  )
};

export default MenuBar;
