import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from 'app_components/authentication/useAuth';

// Client
import ClientLandingPage from 'pages/client/ClientLandingPage';
import Checkout from 'pages/client/Checkout';
import ClientOngoingService from 'pages/client/ClientOngoingService';
import NoAvailability from 'pages/client/NoAvailability';
import RequestConfirmation from 'pages/client/RequestConfirmation';
import ServiceRequest from 'pages/client/ServiceRequest';
import WaitingRoom from 'pages/client/WaitingRoom';

// Staff
import RequestCatalogue from 'pages/staff/RequestCatalogue';
import ServiceConfirmation from 'pages/staff/ServiceConfirmation';
import StaffHomePage from 'pages/staff/StaffHomePage';
import StaffOngoingService from 'pages/staff/StaffOngoingService';
import StaffPerformanceTracker from 'pages/staff/StaffPerformanceTracker';
import WaitingForCheckout from 'pages/staff/WaitingForCheckout';

// Admin
import AdminPerformanceTracker from 'pages/admin/AdminPerformanceTracker';
import Dashboard from 'pages/admin/Dashboard';
import User from 'pages/admin/User';
import Users from 'pages/admin/Users';

// Shared
import Login from 'pages/Shared/Login';
import ServiceComleted from 'pages/Shared/ServiceCompleted';
import ServiceDetail from 'pages/Shared/ServiceDetail';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				{/* <ProvideAuth> */}
					<Route path={'/login'} component={Login} />

					{/* Admin */}
					<Route path={'/admin/performance-tracker'} component={AdminPerformanceTracker} />
					<Route path={'/admin/user'} component={User} />
					<Route path={'/admin/users'} component={Users} />
					<Route path={'/admin/service-detail'} component={ServiceDetail} />
					<Route path={'/admin'} component={Dashboard} />

					{/* Staff */}
					<Route path={'/staff/request-catalogue'} component={RequestCatalogue} />
					<Route path={'/staff/service-confirmation'} component={ServiceConfirmation} />
					<Route path={'/staff/ongoing-service'} component={StaffOngoingService} />
					<Route path={'/staff/performance-tracker'} component={StaffPerformanceTracker} />
					<Route path={'/staff/waiting-for-checkout'} component={WaitingForCheckout} />
					<Route path={'/staff/service-completed'} component={ServiceComleted} />
					<Route path={'/staff/service-detail'} component={ServiceDetail} />
					<Route path={'/staff'} component={StaffHomePage} />

					{/* Client */}
					<Route path={'/checkout'} component={Checkout} />
					<Route path={'/ongoing-service'} component={ClientOngoingService} />
					<Route path={'/no-availability'} component={NoAvailability} />
					<Route path={'/request-confirmation'} component={RequestConfirmation} />
					<Route path={'/service-request'} component={ServiceRequest} />
					<Route path={'/waiting-room'} component={WaitingRoom} />
					<Route path={'/service-completed'} component={ServiceComleted} />
					<Route path={'/'} component={ClientLandingPage} />
				{/* </ProvideAuth> */}
			</Switch>
		</BrowserRouter>
	)
}

export default Router;