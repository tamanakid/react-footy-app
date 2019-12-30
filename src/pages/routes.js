import LayoutTable from 'pages/table/LayoutTable';
import LayoutTeam from 'pages/team/LayoutTeam';


const routes = [
  { path: "/", component: LayoutTable, exact: true },
  { path: "/team/:teamId", component: LayoutTeam, exact: false },
];


export default routes;