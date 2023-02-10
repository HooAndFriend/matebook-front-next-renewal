// ** Nest Imports
import Image from "next/image"

// ** Assets Imports
import egg from "@/assets/imgs/egg.png"

// ** Mui Imports
import { Grid, Typography } from "@mui/material"
import ColorLensIcon from "@mui/icons-material/ColorLens"

function HomeFirstView() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={7}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "white" }}>
              00아 북도리를 만난 걸 환영해!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ color: "white" }}>
              바깥 세상이 궁금해!
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <ColorLensIcon />
              </Grid>
              <Grid item xs={6}>
                <Typography>10P</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <ColorLensIcon />
              </Grid>
              <Grid item xs={6}>
                <Typography>10P</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <ColorLensIcon />
              </Grid>
              <Grid item xs={6}>
                <Typography>10P</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <ColorLensIcon />
              </Grid>
              <Grid item xs={6}>
                <Typography>10P</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} />
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Typography sx={{ color: "white" }}>
            Tip! 50p가 되면 북도리를 깨울 수 있어!
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Typography sx={{ color: "white" }}>
            Tip! 50p가 되면 북도리를 깨울 수 있어!
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Typography sx={{ color: "white" }}>
            Tip! 50p가 되면 북도리를 깨울 수 있어!
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Typography sx={{ color: "white" }}>
            Tip! 50p가 되면 북도리를 깨울 수 있어!
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Image src={egg} alt="Picture of me" placeholder="blur" />
      </Grid>
    </Grid>
  )
}

export default HomeFirstView
