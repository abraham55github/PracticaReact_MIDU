import { Code } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CardPr from "./CardPr";
import Grid from "@mui/material/Grid";

const dataPr = [
    {
        id: 1,
        title: "Inventario STF",
        imageUrl: "../public/img/pr1stf.png",
        description: "Desarrollé una plataforma de inventario para cilindros, camiones de bulks y tanques estacionarios. Se encarga de registrar las cantidades de cilindros de 25, 60 y 100 lbs, registrar los niveles de gas propano o butano en %, litros y galones, así como automatizar el cálculo para gravedad específica y temperatura.",
        sliders: [
            {
                title: "Desarrollo del Sistema de Inventario",
                content: "",
                imageUrl: "https://via.placeholder.com/300x200",
            },
            {
                title: "Automatización con herramientas Microsoft",
                content: "Logré implementar con la ayuda de herramientas de Microsoft como Power Automate, SharePoint, Forms y Lists un formulario que automatizaba la petición de implementos de seguridad en las diferentes plantas. Consistía en realizar un flujo desde el formulario donde se llenaba y se hacía la petición de implementos de seguridad de personal para la planta. Esta petición llegaba como notificación a la persona encargada, quien aprobaba o rechazaba la solicitud, regresando un resumen del pedido a ambas partes.",
                imageUrl: "https://via.placeholder.com/300x200",
            },
            {
                title: "Soporte TI",
                content: "Colaboré con los usuarios para resolver problemas técnicos, desde la instalación y configuración de hardware hasta la solución de problemas de software. Esto no solo mejoró la productividad de los empleados, sino que también fortaleció la comunicación entre los diferentes departamentos.",
                imageUrl: "https://via.placeholder.com/300x200",
            },
        ],
    },
    {
        id: 2,
        title: "DataCenter",
        imageUrl: "https://via.placeholder.com/345x200",
        description: "Desarrollé una plataforma de inventario para cilindros, camiones de bulks y tanques estacionarios. Se encarga de registrar las cantidades de cilindros de 25, 60 y 100 lbs, registrar los niveles de gas propano o butano en %, litros y galones, así como automatizar el cálculo para gravedad específica y temperatura.",
        sliders: [
            {
                title: "Slider",
                content: "Contenido 1 de datacenter slider 1",
                imageUrl: "https://via.placeholder.com/300x200",
            },
            {
                title: "Slider 2 datacenter",
                content: "Contenido 2 de datacenter slider 1",
                imageUrl: "https://via.placeholder.com/300x200",
            },
            {
                title: "Slider 3 datacenter",
                content: "Contenido 3 de datacenter slider 1",
                imageUrl: "https://via.placeholder.com/300x200",
            },
        ],
    },
];

export default function Projects() {
    return (
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
                {dataPr.map((project) => (
                    <Grid item xs={12} md={6} key={project.id}>
                        <CardPr
                            title={project.title}
                            imageUrl={project.imageUrl}
                            description={project.description}
                            sliders={project.sliders}  
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
