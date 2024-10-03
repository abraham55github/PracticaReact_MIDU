import { Code } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CardPr from "./CardPr";
import Grid from "@mui/material/Grid2";

export default function Projects() {
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
                >
                    <Code fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                    Proyectos
                </Typography>

                {/* Uso de spacing responsivo */}
                <Grid container spacing={{ xs: 2, md: 20 }} justifyContent={{ xs: "center", md: "flex-start" }}>

                    <Grid xs={12} md={6}>
                        <CardPr
                            title={'Inventario STF'}
                            imageUrl={"../public/img/pr1stf.png"}
                            description={'Desarrollé una plataforma de inventario para cilindros, camiones de bulks y tanques estacionarios. Se encarga de registrar las cantidades de cilindros de 25, 60 y 100 lbs, registrar los niveles de gas propano o butano en %, litros y galones, asi como automatizar el calculo para gravedad especifica y temperatura.'}
                        />
                    </Grid>

                    <Grid xs={12} md={6}>
                        <CardPr
                            title={'DataCenter'}
                            description={'Desarrollo de una aplicacion para consolidar datos de diferentes fuentes, imports de excel, comparacion de datos, carga de base de datos, export de tablas, etc.'}
                        />
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}
