import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box } from '@mui/material';
import { Code, Drafts, PersonSearch, WorkHistory } from '@mui/icons-material';
import { Link } from 'react-scroll'; // Importar el Link de react-scroll

export default function NavBar() {
    const [value, setValue] = React.useState('');
    const [opacity, setOpacity] = React.useState(1);

    const handleScroll = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        setOpacity(isAtBottom ? 0.1 : 1);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        xs: 300,
                        sm: 400,
                        md: 500,
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '10px',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    position: 'fixed',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                    padding: {
                        xs: '4px 8px',
                        sm: '8px 16px',
                        md: '16px 24px',
                    },
                    opacity: opacity,
                    transition: 'opacity 0.3s ease-in-out',
                }}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            >
                <BottomNavigationAction
                    label="Experiencia"
                    value="experience"
                    icon={<WorkHistory />}
                    component={Link}
                    to="experience" // El ID de la sección
                    smooth={true} // Habilitar desplazamiento suave
                    duration={500} // Duración del scroll en milisegundos
                />
                <BottomNavigationAction
                    label="Proyectos"
                    value="projects"
                    icon={<Code />}
                    component={Link}
                    to="projects"
                    smooth={true}
                    duration={500}
                />
                <BottomNavigationAction
                    label="Sobre mí"
                    value="aboutMe"
                    icon={<PersonSearch />}
                    component={Link}
                    to="aboutMe"
                    smooth={true}
                    duration={500}
                />
                <BottomNavigationAction
                    label="Contacto"
                    value="contact"
                    icon={<Drafts />}
                    component={Link}
                    to="contact"
                    smooth={true}
                    duration={500}
                />
            </BottomNavigation>
        </Box>
    );
}
