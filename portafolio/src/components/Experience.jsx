import {  WorkHistoryOutlined } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

export default function Experience() {
    return (
        <>
            <Box sx={{ border: 1 }} >
                <Typography
                    textAlign={'center'}
                    variant="h4"
                    pt={5}
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WorkHistoryOutlined fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                    Experiencia laboral
                </Typography>
            </Box>
        </>
    )
}
