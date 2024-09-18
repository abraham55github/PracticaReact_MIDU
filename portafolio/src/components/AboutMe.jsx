import { PersonSearchOutlined} from "@mui/icons-material"
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
                    <PersonSearchOutlined fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                    Sobre Mi
                </Typography>

            </Box>
        </>
    )
}
