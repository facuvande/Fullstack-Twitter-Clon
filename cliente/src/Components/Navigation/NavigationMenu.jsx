import HomeIcon from '@mui/icons-material/Home';
import BuscarIcon from '@mui/icons-material/Explore';
import NotificacionIcon from '@mui/icons-material/Notifications';
import MensajesIcon from '@mui/icons-material/Message';
import ListaComunidadesIcon from '@mui/icons-material/ListAlt';
import ComunidadIcon from '@mui/icons-material/Group';
import VerificadoIcon from '@mui/icons-material/Verified';
import CuentaCircleIcon from '@mui/icons-material/AccountCircle';
import PendienteIcon from '@mui/icons-material/Pending';

export const navigationMenu = [
    {
        title: "Inicio",
        icon: <HomeIcon/>,
        path: "/inicio"
    },
    {
        title: "Buscar",
        icon: <BuscarIcon/>,
        path: "/buscar"
    },
    {
        title: "Notificaciones",
        icon: <NotificacionIcon/>,
        path: "/notificaciones"
    },
    {
        title: "Mensajes",
        icon: <MensajesIcon/>,
        path: "/mensajes"
    },
    {
        title: "Lista",
        icon: <ListaComunidadesIcon/>,
        path: "/lista"
    },
    {
        title: "Comunidad",
        icon: <ComunidadIcon/>,
        path: "/comunidad"
    },
    {
        title: "Verificado",
        icon: <VerificadoIcon/>,
        path: "/verificado"
    },
    {
        title: "Perfil",
        icon: <CuentaCircleIcon/>,
        path: "/perfil"
    },
    {
        title: "Mas",
        icon: <PendienteIcon/>,
        path: "/mas"
    },
]