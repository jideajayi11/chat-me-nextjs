import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styles from '../styles/Home.module.css'
import { getUsers } from '../apolloClient/query'
import { client } from '../apolloClient'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'

interface ITextFieldError {
  error: boolean;
  helperText: string;
};

const defaultEmailError: ITextFieldError = {
  error: false,
  helperText: "",
};

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<ITextFieldError>(defaultEmailError);
  const router = useRouter();

  const getUserFunc: any = async () => {
    try {
      const res = await client.query({ query: getUsers, variables: { email } });
      return res?.data?.users;
    } catch(error: any) {
      setEmailError({
        error: true,
        helperText: "Something went wrong",
      });
      return null;
    }
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleBtnClick = async () => {
    if (!email) {
      setEmailError({
        error: true,
        helperText: "Email field cannot be empty",
      });
    } else {
      setEmailError(defaultEmailError);
      const result = await getUserFunc();
      if (result.length) {
        router.push("/chats");
      } else {
        setEmailError({
          error: true,
          helperText: "Email was not found"
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Card elevation={3} sx={{ mt: -8, p: 2, pb: 5, width: "300px", backgroundColor: "#fffeee" }}>
          <Stack spacing={1}>
            <h3>Login to Chat-me</h3>
            <TextField variant="standard" label="Email" error={emailError.error} helperText={emailError.helperText} value={email} onChange={handleEmailChange} />
            <Button variant="contained" color='info' onClick={handleBtnClick}>Login</Button>
            <Box sx={{color: "#ccc", textAlign: "center"}}><Link href="/register"><a>Register here!!!</a></Link></Box>
          </Stack>
        </Card>
      </main>
    </div>
  )
}

export default Login
