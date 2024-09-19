import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box } from '@mui/material';
import { Code, Drafts, PersonSearch, WorkHistory } from '@mui/icons-material';

export default function NavBar() {
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ position: 'fixed', left: 0, right: 0, zIndex: 1000 }}
        >
            <BottomNavigation
                sx={{
                    width: {
                        xs: 300, // Para pantallas pequeñas (extra small)
                        sm: 400, // Para pantallas pequeñas
                        md: 500, // Para pantallas medianas y más grandes
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Fondo semitransparente
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  // Sombra alrededor del componente
                    border: '1px solid rgba(255, 255, 255, 0.3)',  // Borde semitransparente
                    borderRadius: '10px',                          // Bordes redondeados
                    backdropFilter: 'blur(10px)',                  // Efecto de desenfoque en el fondo
                    WebkitBackdropFilter: 'blur(10px)',            // Compatibilidad con Safari
                    position: 'fixed',                             // Posición fija
                    bottom: 20,                                    // 20px desde la parte inferior
                    left: '50%',                                   // Centramos horizontalmente
                    transform: 'translateX(-50%)',                 // Aseguramos que esté bien centrado
                    zIndex: 1000,                                  // Aseguramos que esté por encima de otros elementos
                    padding: {
                        xs: '4px 8px',  // Menos padding en pantallas pequeñas
                        sm: '8px 16px',
                        md: '16px 24px',
                    },
                }}
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label="Experiencia"
                    value="experience"
                    icon={<WorkHistory />}
                />
                <BottomNavigationAction
                    label="Proyectos"
                    value="projects"
                    icon={<Code />}
                />
                <BottomNavigationAction
                    label="Sobre mi"
                    value="aboutMe"
                    icon={<PersonSearch />}
                />
                <BottomNavigationAction
                    label="Contacto"
                    value="contact"
                    icon={<Drafts />}
                />
            </BottomNavigation>
        </Box>
    );
}
