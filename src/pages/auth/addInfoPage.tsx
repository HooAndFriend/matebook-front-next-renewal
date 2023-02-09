// ** Next Imports
import Link from "next/link"

// ** Assets Imports
import Color from "@/assets/color"

// ** Mui Imports
import { Button, Card, Grid, TextField, Typography } from "@mui/material"

function AddinfoPage() {
  return (
    <Grid container spacing={6} sx={{ px: 60, py: 10 }}>
      <Grid item xs={12}>
        <Typography variant="h4" color="white">
          matebook
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="메이트 닉네임"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
          name="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="최근의 읽은 책"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" color="white">
          관심 있는 책
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minHeight: 250 }}>
              <Typography>책</Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Link href="/home">
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
          >
            시작하기
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  )
}

export default AddinfoPage
