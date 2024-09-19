import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box } from '@mui/material';
import { Code, Drafts, PersonSearch, WorkHistory } from '@mui/icons-material';

export default function NavBar() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Experiencia"
                    value="recents"
                    icon={<WorkHistory />}
                />
                <BottomNavigationAction
                    label="Proyectos"
                    value="favorites"
                    icon={<Code />}
                />
                <BottomNavigationAction
                    label="Sobre mi"
                    value="nearby"
                    icon={<PersonSearch />}
                />

            </BottomNavigation>
            <BottomNavigationAction label="Contacto" value="folder" icon={<Drafts />} />
        </Box>
    );
}
