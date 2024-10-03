import { PersonSearchOutlined } from "@mui/icons-material"
import { Box, Typography, styled } from "@mui/material"
import Grid from '@mui/material/Grid2';

export default function Projects() {

    const Img = styled("img")(
        {
            width: 200,
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
        }
    )


    return (
        <>
            <Box paddingBottom={10}>
                <Typography
                    textAlign={'center'}
                    variant="h4"
                    pt={5}
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingBottom={3}
                >
                    <PersonSearchOutlined fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                    Sobre Mi
                </Typography>

                <Box>
                    <Grid container spacing={2}>
                        {/* Texto */}
                        <Grid display="flex" justifyContent="center" alignItems="center" size={{
                            xs: 12,
                            md: 6
                        }} 
                        >
                            <Typography pl={5} variant="body1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident numquam animi itaque est ipsam aperiam laborum alias odit mollitia ullam, perspiciatis rem cum optio voluptatibus vel asperiores blanditiis? Quisquam?

                            </Typography>
                        </Grid>

                        {/* Imagen */}
                        <Grid display="flex" justifyContent="center" alignItems="center" size={{
                            
                            xs: 12,
                            md: 6

                        }} 
                        >
                            <Img src="https://via.placeholder.com/100x100" alt="imagen" />
                        </Grid>
                    </Grid>

                </Box>

            </Box>
        </>
    )
}
