// ** Assets Imports
import Color from "@/assets/color"

// ** Mui Imports
import { Grid, Typography, Chip, TextField } from "@mui/material"
import ColorLensIcon from "@mui/icons-material/ColorLens"

function HomeSecondView() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          어떤 책을 찾고 있어?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="도서 검색"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: 1.5 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12 / 5} sx={{ textAlign: "center" }}>
            <Chip
              label="Chip Outlined"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderColor: Color.yello,
                borderWidth: 3,
              }}
            />
          </Grid>
          <Grid item xs={12 / 5} sx={{ textAlign: "center" }}>
            <Chip
              label="Chip Outlined"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderColor: Color.yello,
                borderWidth: 3,
              }}
            />
          </Grid>
          <Grid item xs={12 / 5} sx={{ textAlign: "center" }}>
            <Chip
              label="Chip Outlined"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderColor: Color.yello,
                borderWidth: 3,
              }}
            />
          </Grid>
          <Grid item xs={12 / 5} sx={{ textAlign: "center" }}>
            <Chip
              label="Chip Outlined"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderColor: Color.yello,
                borderWidth: 3,
              }}
            />
          </Grid>
          <Grid item xs={12 / 5} sx={{ textAlign: "center" }}>
            <Chip
              label="Chip Outlined"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderColor: Color.yello,
                borderWidth: 3,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeSecondView
