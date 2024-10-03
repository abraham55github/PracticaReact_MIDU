import { GitHub, Link } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function CardPr() {
    return (
        <Box paddingTop={5}>
            <Card
                sx={{
                    maxWidth: 345,
                    transition: "0.25",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}
            >
                <CardMedia
                    component="img"
                    image="https://via.placeholder.com/100x50"
                    heigh="200"
                    alt="una descripcion"
                />
                <CardContent>
                    <Typography variant="h5" >Inventario STF</Typography>
                    <Typography component="p" variant="body2">
                        desarrollé una plataforma de inventario para cilindros, camiones de bulks y tanques estacionarios.
                        Se encarga de registrar las cantidades de cilindros de 25, 60 y 100 lbs, registrar los niveles de gas propano o butano en %, litros y galones,
                        asi como automatizar el calculo para gravedad especifica y temperatura.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="center" >
                        <IconButton color="secondary" aria-label="github" size="large">
                            <GitHub fontSize="inherit" />
                        </IconButton>
                        <IconButton color="secondary" aria-label="github" size="large">
                            <Link fontSize="inherit" />
                        </IconButton>
                    </Grid>
                </CardActions>
            </Card>
        </Box>
    )
}
