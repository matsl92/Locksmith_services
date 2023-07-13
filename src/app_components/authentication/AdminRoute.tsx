import { Route, Link, Redirect } from 'react-router-dom';
import { useAuth } from 'app_components/authentication/useAuth';

// function AdminRoute({ children, ...rest }: any) {
//     let auth = useAuth();
//     return (
//         <Route 
//             {...rest}
//             render={({ location }) => {
//                 auth.user ? (
//                     children
//                 ) : (
//                     <Redirect 
//                         to={{
//                             pathname: '/login',
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }}
//         />
//     )
// }


// function AdminRoute({ children, ...rest }) {
    
//     return (
//         true
//         )
//     }
    
// export default AdminRoute;

function AdminRoute() {
    
    return (
        true
        )
    }
    
export default AdminRoute;