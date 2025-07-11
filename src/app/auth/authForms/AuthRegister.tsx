import { Box, Typography, Button, Divider } from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";
import { registerType } from "@/app/(DashboardLayout)/types/auth/auth";
import AuthSocialButtons from "./AuthSocialButtons";

// Agregado
import { useContext, useState } from "react";
import AuthContext from "../auth-context/AuthContext";
import axios from "axios";
import { useRouter } from "next/navigation";


const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  const { login } = useContext(AuthContext);
  const [name, setRegisterName] = useState('');
  const [email, setRegisterEmail] = useState('');
  const [password, setRegisterPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        name: name,
        username: email,  // Here we need to use "username" because the api was created with username and not with email 
        password: password,
      });
      router.push('/auth/auth2/login');
      // login(email, password);
      } catch(error) {
        console.error('Failed to register user:', error);
      }
    }
  
    return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <AuthSocialButtons title="Sign up with" />

      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign up with
          </Typography>
        </Divider>
      </Box>

      <form onSubmit={handleRegister}>
        <Box>
          <Stack mb={3}>
            <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
            <CustomTextField
              id="name" value={name} variant="outlined" fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterName(e.target.value)}  
            />
            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
            <CustomTextField
              id="email" value={email} variant="outlined" fullWidth required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterEmail(e.target.value)}  
            />            
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password" value={password} type="password" variant="outlined" fullWidth required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterPassword(e.target.value)}  
            />
          </Stack>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            // component={Link}
            // href="/auth/auth1/login"
            type="submit"
          >
            Sign Up
          </Button>
        </Box>
      </form>
      {subtitle}
    </>
  );
};

export default AuthRegister;
