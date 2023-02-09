import HomeFirstView from "@/views/home/homeFirstView"
import { Grid } from "@mui/material"

function HomePage() {
  return (
    <Grid container spacing={6} sx={{ px: 40, py: 10 }}>
      <Grid item xs={12}>
        <HomeFirstView />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  )
}

export default HomePage
