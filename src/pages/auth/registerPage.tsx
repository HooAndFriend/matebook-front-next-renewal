// ** Next Imports
import Link from "next/link"

// ** React Imports
import { useState } from "react"

// ** Assets Imports
import Color from "@/assets/color"

// ** Mui Imports
import {
  Button,
  Grid,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

// ** Date Imports
import dayjs, { Dayjs } from "dayjs"

function RegisterPage() {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2014-08-18T21:11:54"))
  const [age, setAge] = useState("")

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  const handleChangeDate = (newValue: Dayjs | null) => {
    setValue(newValue)
  }
  return (
    <Grid container spacing={6} sx={{ px: 60, py: 10 }}>
      <Grid item xs={12}>
        <Typography variant="h4" color="white">
          matebook
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="이름"
          fullWidth
          sx={{
            backgroundColor: Color.purple,
            borderRadius: 1.5,
          }}
          name="name"
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChangeAge}
            sx={{
              backgroundColor: Color.purple,
              borderRadius: 1.5,
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="생일"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChangeDate}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={8}>
        <TextField
          label="Email"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
          name="email"
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: Color.purple, minHeight: 55 }}
        >
          코드 전송
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="인증 코드"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="password"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
          name="password"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="password check"
          fullWidth
          sx={{ backgroundColor: Color.purple, borderRadius: 1.5 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Link href="/auth/addInfoPage">
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: Color.purple, minHeight: 55 }}
          >
            회원가입
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default RegisterPage
