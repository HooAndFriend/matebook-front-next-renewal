import { Grid, TextField, Typography, Chip, Button } from "@mui/material"
import Image from "next/image"

import bookArr from "@/assets/imgs/bookArr.png"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import Color from "@/assets/color"

function HomeFifthView() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={3}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: "white" }}>
            코멘트 달 책 둘러보기
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ color: "white", my: 4 }}>
            평소 읽고 싶었던 책, 관심 있는 책을 살펴보고 내가 읽었던 책을 찾아서
            코멘트 달 수 있어요!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">전체보기</Button>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Image
          src={bookArr}
          alt="Picture of me"
          placeholder="blur"
          width={1000}
        />
      </Grid>
    </Grid>
  )
}

export default HomeFifthView
