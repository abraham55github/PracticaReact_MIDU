import { Code } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

export default function Projects() {
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
                    <Code fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                    Proyectos
                </Typography>

            </Box>
        </>
    )
}
