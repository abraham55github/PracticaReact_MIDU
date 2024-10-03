import { Paper, Box, Typography, Button } from "@mui/material";

export default function CardExp() {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        padding: 2,
      }}
    >
      <Box sx={{ padding: { xs: 2, sm: 4 }, flexBasis: "30%" }}>
        <Typography color="primary" variant="h5" display="flex">
          Innovación y Desarrollo TI
        </Typography>
        <Typography variant="body1">Panagas</Typography>
        <Typography color="grey" variant="body2">
          Abril - Septiembre 2024
        </Typography>
      </Box>
      <Box
        sx={{
          paddingY: { xs: 2, sm: 4 },
          paddingRight: { xs: 2, sm: 4 },
          flexBasis: "70%",
        }}
      >
        <Typography pb={2}>
          Durante 6 meses, desarrollé una plataforma de inventario para cilindros y tanques.
          También proporcioné soporte técnico al equipo informático, 
          desarrollé soluciones automatizadas con Power Automate y SharePoint, 
          realice desplegué de aplicaciones en un servidor Linux con Apache2 
          y participé en el desarrollo de una aplicación para consolidar datos.
        </Typography>
        <Button variant="contained" color="primary">
          Detalles
        </Button>
      </Box>
    </Paper>
  );
}
