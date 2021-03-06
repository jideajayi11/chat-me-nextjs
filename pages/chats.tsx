import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import styles from '../styles/Home.module.css'
import MenuBar from '../components/MenuBar'
import DirectionsIcon from '@mui/icons-material/Directions';

const Chat: NextPage = () => {
  return (
    <>
      <MenuBar />
      <div className={styles.container}>
        <Head>
          <title>Chats</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <Box sx={{ backgroundColor: "#fff", height: "calc(100vh - 130px)", position: "fixed", width: "calc(100% - 2rem * 2)", overflowY: "auto", display: 'flex', flexDirection: 'column-reverse' }}>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>ddd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>kjfdxfgvjh kkklkhvcrdsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>dkfg nbcgt oih lkjh nnccccbn hguk oligg dd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>ytdfgh kkkl khvcr dsrgj kkkl khvcr dsrgj kkkl khvcr dsrgj kkkl khvcr dsrgj kkkl khvcr dsrgj kkkl khvcr dsrgj kkkl khvcr dsrgj kkkl khvcr dsrgj kkkl khvcr dsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>ddd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>kjfdxfgvjh kkklkhvcrdsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>dkfg nbcgt oih lkjh nnccccbn hguk oligg dddkfg nbcgt oih lkjh nnccccbn hguk oligg dddkfg nbcgt oih lkjh nnccccbn hguk oligg dddkfg nbcgt oih lkjh nnccccbn hguk oligg dddkfg nbcgt oih lkjh nnccccbn hguk oligg dddkfg nbcgt oih lkjh nnccccbn hguk oligg dd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>ytdfgh kkkl khvcr dsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>ddd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>kjfdxfgvjh kkklkhvcrdsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>dkfg nbcgt oih lkjh nnccccbn hguk oligg dd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>ytdfgh kkkl khvcr dsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>ddd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>kjfdxfgvjh kkklkhvcrdsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>dkfg nbcgt oih lkjh nnccccbn hguk oligg dd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>ytdfgh kkkl khvcr dsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>ddd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>kjfdxfgvjh kkklkhvcrdsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>dkfg nbcgt oih lkjh nnccccbn hguk oligg dd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>ytdfgh kkkl khvcr dsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>ddd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>kjfdxfgvjh kkklkhvcrdsrgj</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-start"}>
              <span className={`${styles.chatDiv} ${styles.leftChat}`}>dkfg nbcgt oih lkjh nnccccbn hguk oligg dd</span>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"}>
              <span className={`${styles.chatDiv} ${styles.rightChat}`}>ytdfgh kkkl khvcr dsrgj</span>
            </Stack>
          </Box>
        <Box sx={{ position: 'fixed', bottom: "0", width: "calc(100% - 2rem * 2)", backgroundColor: "#fffeee" }}>
          <Stack direction="row" justifyContent={"space-between"}>
            <TextField multiline variant="outlined" label="chat-me" sx={{ width: "calc(100% - 2rem * 2)" }}/>
            <DirectionsIcon sx={{ m: 2}} />
          </Stack>
        </Box>
      </div>
    </>
  )
}

export default Chat
