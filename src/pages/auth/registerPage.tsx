import Color from "@/assets/color"
import { Button, Grid, TextField, Typography } from "@mui/material"

function RegisterPage() {
  return (
    <Grid container spacing={6} sx={{ px: 120, py: 40 }}>
      <Grid item xs={12}>
        <Typography>matebook</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={3}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={8}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth>
          코드 전송
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth />
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: Color.kakao }}
        >
          카카오계정 로그인
        </Button>
      </Grid>
    </Grid>
  )
}

export default RegisterPage
