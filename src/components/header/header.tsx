"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Paper,
  Stack,
  ClickAwayListener,
  Button,
} from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClickAway = () => setOpen(false);

  return (
    <AppBar position="sticky" sx={{ background: "#000", color: "#fff" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: "2rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Beyza Kilim
        </Typography>

        <Box sx={{ position: "relative" }}>
          <IconButton onClick={handleToggle} color="inherit">
            <CiMenuBurger />
          </IconButton>

          {open && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Paper sx={{ position: "absolute", top: "calc(100% + 8px)", right: 0, width: 160, p: 1, zIndex: 1300 }}>
                <Stack spacing={1}>
                  {status === "loading" ? (
                    <Typography>Kontrol ediliyor...</Typography>
                  ) : session ? (
                    <>
                      <Button
                        onClick={() => {
                          router.push("/panel");
                          handleClickAway();
                        }}
                      >
                        Profil
                      </Button>
                      <Button onClick={() => signOut({ callbackUrl: "/login" })}>Çıkış Yap</Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          router.push("/login");
                          handleClickAway();
                        }}
                      >
                        Giriş Yap
                      </Button>
                      <Button
                        onClick={() => {
                          router.push("/register");
                          handleClickAway();
                        }}
                      >
                        Kayıt Ol
                      </Button>
                    </>
                  )}
                </Stack>
              </Paper>
            </ClickAwayListener>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
