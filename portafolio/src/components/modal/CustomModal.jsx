// CustomModal.js
import { useState } from "react";
import { Box, Modal, Typography, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";



const CustomModal = ({ sliders, onClose, open }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + sliders.length) % sliders.length);
    };


    console.log(sliders)
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: '600px' }, // Hacemos el modal responsivo
                    bgcolor: 'background.paper',
                    maxWidth: '90vw',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="modal-title" variant="h6" component="h2">
                    {sliders[currentSlide].title}
                </Typography>
                <Box>
                    <img
                        src={sliders[currentSlide].image}
                        alt={sliders[currentSlide].title}
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />

                    <Grid container spacing={1}>

                        <Grid size={1} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                            <IconButton onClick={handlePrevSlide} disabled={currentSlide === 0}>
                                <ArrowBackIos />
                            </IconButton>
                        </Grid>
                        <Grid size={ 10}>
                            <Typography id="modal-description" sx={{ mt: 2 }}>
                                {sliders[currentSlide].content}
                            </Typography>
                        </Grid>
                        <Grid size={1} display={'flex'} justifyContent={'initial'} alignItems={'center'}>
                            <IconButton onClick={handleNextSlide} disabled={currentSlide === sliders.length - 1}>
                                <ArrowForwardIos />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
                <Button onClick={onClose} sx={{ mt: 2 }}>
                    Cerrar
                </Button>
            </Box>
        </Modal>
    );
};

export default CustomModal;
