// ** Nest Imports
import Image from "next/image"

// ** Assets Imports
import book from "@/assets/imgs/book.png"

// ** Mui Imports
import { Grid, Typography } from "@mui/material"

function HomeThirdView() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          북도리 성장을 도와주는 책
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          sx={{ color: "white", textAlign: "center" }}
        >
          관심있는 카테고리 책을 골라
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", textAlign: "center" }}
        >
          메이트 성장을 도울 수 있어요!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={1.5} sx={{ textAlign: "center", mt: 10 }}>
            <Image
              src={book}
              alt="Picture of me"
              placeholder="blur"
              width={100}
            />
            <Typography variant="body2" sx={{ color: "white" }}>
              키 쑥쑥 영양책
            </Typography>
          </Grid>
          <Grid item xs={2.5} sx={{ textAlign: "center", mt: 7 }}>
            <Image
              src={book}
              alt="Picture of me"
              placeholder="blur"
              width={150}
            />
            <Typography variant="body1" sx={{ color: "white" }}>
              키 쑥쑥 영양책
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Image
              src={book}
              alt="Picture of me"
              placeholder="blur"
              width={250}
            />
            <Typography variant="h6" sx={{ color: "white" }}>
              키 쑥쑥 영양책
            </Typography>
          </Grid>
          <Grid item xs={2.5} sx={{ textAlign: "center", mt: 7 }}>
            <Image
              src={book}
              alt="Picture of me"
              placeholder="blur"
              width={150}
            />
            <Typography variant="body1" sx={{ color: "white" }}>
              키 쑥쑥 영양책
            </Typography>
          </Grid>
          <Grid item xs={1.5} sx={{ textAlign: "center", mt: 10 }}>
            <Image
              src={book}
              alt="Picture of me"
              placeholder="blur"
              width={100}
            />
            <Typography variant="body2" sx={{ color: "white" }}>
              키 쑥쑥 영양책
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeThirdView
