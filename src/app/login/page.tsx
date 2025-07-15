"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // signIn fonksiyonuyla credentials tabanlı giriş yapıyoruz, redirect false
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl: searchParams.get("next") || "/",
    });

    setLoading(false);

    if (res?.error) {
      setError("Kullanıcı adı veya şifre yanlış");
    } else {
      // Başarılı ise callbackUrl'ye yönlendir
      router.push(res?.url || "/");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" align="center" mb={3}>
        Giriş Yap
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            label="Kullanıcı Adı"
            name="username"
            type="text"
            required
            fullWidth
            InputProps={{ style: { backgroundColor: "#fff", color: "#000" } }}
            InputLabelProps={{ style: { color: "#000" } }}
          />
          <TextField
            label="Şifre"
            name="password"
            type="password"
            required
            fullWidth
            InputProps={{ style: { backgroundColor: "#fff", color: "#000" } }}
            InputLabelProps={{ style: { color: "#000" } }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
