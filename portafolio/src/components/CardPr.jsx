import { GitHub, Link } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function CardPr() {
    return (
        <Box p={5}>
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
                    <Typography variant="h5" >Title</Typography>
                    <Typography component="p" variant="body2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tempore aspernatur aliquid saepe tenetur veniam eligendi recusandae nemo molestiae voluptatem. Provident repudiandae sed velit corporis voluptas commodi! Repellat, rerum sit!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="center" >
                        <IconButton color="secondary" aria-label="github" size="large">
                            <GitHub fontSize="inherit"/>
                        </IconButton>
                        <IconButton color="secondary" aria-label="github" size="large">
                            <Link fontSize="inherit"/>
                        </IconButton>
                    </Grid>
                </CardActions>
            </Card>
        </Box>
    )
}
