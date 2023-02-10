// ** Nest Imports
import Image from "next/image"

// ** Assets Imports
import book from "@/assets/imgs/book.png"

// ** Mui Imports
import { Grid, Typography } from "@mui/material"

function HomeFourthView() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          친구들이 가장 많이 읽은 Top 6
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src={book}
                  alt="Picture of me"
                  placeholder="blur"
                  width={150}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ p: 2, mt: 15, color: "white" }}
                >
                  키 쑥쑥 영양책
                </Typography>
                <Typography variant="body2" sx={{ px: 2, color: "white" }}>
                  키 쑥쑥 영양책
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src={book}
                  alt="Picture of me"
                  placeholder="blur"
                  width={150}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ p: 2, mt: 15, color: "white" }}
                >
                  키 쑥쑥 영양책
                </Typography>
                <Typography variant="body2" sx={{ px: 2, color: "white" }}>
                  키 쑥쑥 영양책
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src={book}
                  alt="Picture of me"
                  placeholder="blur"
                  width={150}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ p: 2, mt: 15, color: "white" }}
                >
                  키 쑥쑥 영양책
                </Typography>
                <Typography variant="body2" sx={{ px: 2, color: "white" }}>
                  키 쑥쑥 영양책
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src={book}
                  alt="Picture of me"
                  placeholder="blur"
                  width={150}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ p: 2, mt: 15, color: "white" }}
                >
                  키 쑥쑥 영양책
                </Typography>
                <Typography variant="body2" sx={{ px: 2, color: "white" }}>
                  키 쑥쑥 영양책
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src={book}
                  alt="Picture of me"
                  placeholder="blur"
                  width={150}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ p: 2, mt: 15, color: "white" }}
                >
                  키 쑥쑥 영양책
                </Typography>
                <Typography variant="body2" sx={{ px: 2, color: "white" }}>
                  키 쑥쑥 영양책
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src={book}
                  alt="Picture of me"
                  placeholder="blur"
                  width={150}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ p: 2, mt: 15, color: "white" }}
                >
                  키 쑥쑥 영양책
                </Typography>
                <Typography variant="body2" sx={{ px: 2, color: "white" }}>
                  키 쑥쑥 영양책
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeFourthView
