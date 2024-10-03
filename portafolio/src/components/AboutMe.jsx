import { PersonSearchOutlined } from "@mui/icons-material"
import { Box, Typography, styled } from "@mui/material"
import Grid from '@mui/material/Grid2';

export default function Projects() {

    const Img = styled("img")(
        {
            width: 200,
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",

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
                                ¡Hola! Soy Abraham Julio Otero González,{' '}
                                <span style={{ color: '#69932e', fontWeight: 'bold' }}>
                                    Ingeniero en Sistemas y Computación por la Universidad Tecnológica de Panamá.
                                </span>{' '}
                                Soy un apasionado de la tecnología y me encanta desarrollar software con el objetivo de encontrar soluciones a problemas
                                cotidianos.
                                Me enfoco en comprender y aprender los diferentes{' '}
                                <span style={{ color: '#69932e', fontWeight: 'bold' }}>
                                    patrones de diseño de software y arquitecturas,
                                </span>{' '}
                                buscando siempre la manera más eficiente de construir aplicaciones que cumplan con los objetivos planteados y
                                ofrezcan un valor real.
                            </Typography>
                        </Grid>

                        {/* Imagen */}
                        <Grid display="flex" justifyContent="center" alignItems="center" size={{

                            xs: 12,
                            md: 6

                        }}
                        >
                            <Img src="../public/img/perfil4.png" alt="imagen" />
                        </Grid>
                    </Grid>

                </Box>

            </Box>
        </>
    )
}
