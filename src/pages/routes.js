import LayoutTable from 'pages/table/LayoutTable';
import LayoutTeam from 'pages/team/LayoutTeam';
import LayoutHome from 'pages/home/LayoutHome';


const routes = [
  { path: "/home", component: LayoutHome, exact: false },
  { path: "/table", component: LayoutTable, exact: false },
  { path: "/team/:teamId", component: LayoutTeam, exact: false },
];


export default routes;