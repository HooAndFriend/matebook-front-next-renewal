// ** Nest Imports
import Image from "next/image"

// ** Assets Imports
import logo from "@/assets/imgs/logo.png"

// ** Mui Imports
import { Grid, Typography } from "@mui/material"

function HomeHeader() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={3}>
        <Image src={logo} alt="Picture of me" placeholder="blur" width={200} />
      </Grid>
      <Grid item xs={5} />
      <Grid item xs={4}>
        <Grid container spacing={6}>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "white" }}>
              찜
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "white" }}>
              로그아웃
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "white" }}>
              보호자
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeHeader
