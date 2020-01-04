import LayoutTable from 'pages/table/LayoutTable';
import LayoutTeam from 'pages/team/LayoutTeam';


const routes = [
  { path: "/table", component: LayoutTable, exact: false },
  { path: "/team/:teamId", component: LayoutTeam, exact: false },
];


export default routes;