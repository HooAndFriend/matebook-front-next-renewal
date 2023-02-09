// ** Next Imports
import Link from "next/link"

// ** Custom Hooks Imports
import useInput from "@/hooks/useInput"

// ** Assets Imports
import Color from "@/assets/color"

// ** Mui Imports
import { Button, Grid, TextField, Typography } from "@mui/material"

function LoginPage() {
  const [user, setUser] = useInput({
    email: "",
    password: "",
  })

  const handleClickLogin = () => {}

  return (
    <Grid container spacing={6} sx={{ px: 60, py: 10 }}>
      <Grid item xs={12}>
        <Typography variant="h4" color="white">
          matebook
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="아이디"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
          name="email"
          value={user.email}
          onChange={setUser}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="비밀번호"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
          name="password"
          value={user.password}
          onChange={setUser}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: Color.purple, minHeight: 55 }}
          onClick={handleClickLogin}
        >
          로그인
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          color="white"
          textAlign="right"
          sx={{ pr: 2, mt: -2, mb: 3 }}
        >
          아이디/비밀번호 찾기
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: Color.naver, minHeight: 55 }}
        >
          네이버 로그인
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: Color.kakao, minHeight: 55, color: "black" }}
        >
          카카오계정 로그인
        </Button>
      </Grid>
      <Grid item xs={7}>
        <Typography variant="body2" color="white" textAlign="right">
          matebook이 처음이라면?
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Link href="/auth/registerPage">
          <Typography variant="body2" color="white">
            회원가입
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

export default LoginPage
