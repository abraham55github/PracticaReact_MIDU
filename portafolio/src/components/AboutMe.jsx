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
            <Box>
                <Typography
                    textAlign={'center'}
                    variant="h4"
                    pt={5}
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <PersonSearchOutlined fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                    Sobre Mi
                </Typography>

                <Box>
                    <Grid container spacing={2} justifyContent="center" mt={2}>
                     
                        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                            <Typography pl={5} variant="body1" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident numquam animi itaque est ipsam aperiam laborum alias odit mollitia ullam, perspiciatis rem cum optio voluptatibus vel asperiores blanditiis? Quisquam?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maxime tenetur exercitationem labore quaerat pariatur recusandae omnis corrupti? Cum repellat recusandae modi ut quisquam a fugiat ullam sed deserunt sapiente.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error eos numquam harum nam in! Quibusdam tempore vitae vel, ipsa corporis officiis mollitia, dignissimos ea a quo facilis repellendus labore? 
                            </Typography>
                        </Grid>
                        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                            <Img
                                src="https://via.placeholder.com/100x100"
                                alt="imagen"
                            />
                        </Grid>

                    </Grid>

                </Box>

            </Box>
        </>
    )
}
