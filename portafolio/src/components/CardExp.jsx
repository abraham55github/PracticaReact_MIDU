import { Paper, Box, Typography, Button } from "@mui/material";

export default function CardExp() {
  return (
    <Paper sx={{display:"flex", alignItems: "center", gap: 2, overflow: "hidden"}}>
        <Box sx={{padding:{xs:2, sm:4, md:8}}}>
            <Typography color="primary" variant="h4" display="flex">Titulo</Typography>
            <Typography variant="body1">Empresa</Typography>
            <Typography color="grey" variant="body2">Fecha</Typography>
        </Box>
        <Box sx={{paddingY:{xs:2, sm:4}, paddingRight:{xs:2, sm:4}}} >
            <Typography pb={2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae distinctio optio adipisci, inventore praesentium pariatur exercitationem, amet eum ab, iste necessitatibus reiciendis! Aliquam ipsum modi sint esse quisquam explicabo.</Typography>
            <Button variant="contained" color="primary">
              Detalles
            </Button>
        </Box>
    </Paper>
  )
}
