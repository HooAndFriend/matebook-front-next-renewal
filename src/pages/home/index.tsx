import HomeSecondView from "@/views/home/homeSecondView"
import HomeFirstView from "@/views/home/homeFirstView"
import { Grid } from "@mui/material"
import HomeThirdView from "@/views/home/homeThirdView"
import HomeFourthView from "@/views/home/homeFourthView"
import HomeFifthView from "@/views/home/homeFifthView"
import HomeHeader from "@/views/home/homeHeader"

function HomePage() {
  return (
    <Grid container spacing={6} sx={{ px: 40, py: 10 }}>
      <Grid item xs={12} sx={{ mt: -5 }}>
        <HomeHeader />
      </Grid>
      <Grid item xs={12} sx={{ my: 10 }}>
        <HomeFirstView />
      </Grid>
      <Grid item xs={12} sx={{ my: 10 }}>
        <HomeSecondView />
      </Grid>
      <Grid item xs={12} sx={{ my: 10 }}>
        <HomeThirdView />
      </Grid>
      <Grid item xs={12} sx={{ my: 10 }}>
        <HomeFourthView />
      </Grid>
      <Grid item xs={12} sx={{ my: 10 }}>
        <HomeFifthView />
      </Grid>
    </Grid>
  )
}

export default HomePage
