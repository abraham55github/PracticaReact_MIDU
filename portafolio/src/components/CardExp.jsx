import { Paper, Box, Typography, Button } from "@mui/material";

export default function CardExp() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // En xs, se apilan en columna
        alignItems: { xs: "flex-start", sm: "center" }, // Alineación para xs y sm+
        gap: 2,
        overflow: "hidden",
        padding: { xs: 2, sm: 3 },
      }}
    >
      {/* Sección de la izquierda */}
      <Box sx={{ padding: { xs: 2, sm: 4 }, flexBasis: { xs: "100%", sm: "30%" } }}>
        <Typography color="primary" variant="h6" display="flex"> {/* Cambiado a h6 en xs */}
          Innovación y Desarrollo TI
        </Typography>
        <Typography variant="body1">Panagas</Typography>
        <Typography color="grey" variant="body2">
          Abril - Septiembre 2024
        </Typography>
      </Box>

      {/* Sección de la derecha */}
      <Box
        sx={{
          paddingY: { xs: 2, sm: 4 },
          paddingRight: { xs: 0, sm: 4 }, // Quitar padding-right en xs
          flexBasis: { xs: "100%", sm: "70%" }, // Flexibilidad según el tamaño de pantalla
        }}
      >
        <Typography pb={2} variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
          Durante 6 meses, desarrollé una plataforma de inventario para cilindros y tanques.
          También proporcioné soporte técnico al equipo informático, 
          desarrollé soluciones automatizadas con Power Automate y SharePoint, 
          realicé despliegue de aplicaciones en un servidor Linux con Apache2 
          y participé en el desarrollo de una aplicación para consolidar datos.
        </Typography>
        <Button variant="contained" color="primary" size="small">
          Detalles
        </Button>
      </Box>
    </Paper>
  );
}
