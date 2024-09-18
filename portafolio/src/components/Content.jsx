import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/material"
import Grid from '@mui/material/Grid2';

export default function Content() {
    return (
        <>
            <Box sx={{ border: 1, paddingY: 8 }} >
                <Typography textAlign={'center'} variant="h2" color="initial" pt={5} fontWeight="bold">
                    Abraham Otero
                </Typography>
                <Box sx={{ paddingX: { sm: 5, xs: 2 , lg: 30 }, paddingY: 2 }}>
                    <Typography textAlign={'center'} variant="body1" color="initial">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit iusto labore, dolor et harum molestias eum quod aliquid dolorem recusandae, perferendis repellendus neque officia soluta nostrum officiis sapiente repudiandae.
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" mt={2}>
                        <Button color="secondary" variant="outlined" startIcon={<GitHub />}>
                            GitHub
                        </Button>
                        <Button color="secondary" variant="outlined" startIcon={<LinkedIn />}>
                            Linkedin
                        </Button>
                        <Button color="secondary" variant="outlined" startIcon={<Mail />}>
                            Mail
                        </Button>
                    </Grid>
                </Box>

            </Box>
        </>
    )
}
