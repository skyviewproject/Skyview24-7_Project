import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Profile from "./ProfilePage/Profile";
import AddCarPage from './AddCarPage/AddCarPage';
import Header from "./HeaderPart/Header";
import Footer from "./FooterPart/Footer";
import NavBar from './NavbarPart/NavBar';
import AddorUpdateCar from './AddorUpdateCarPage/AddorUpdateCar';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';
import Home from './HomePage/Home';
import UpdateProfile from './UpdateProfilePage/UpdateProfile';
import RedirectToLoginpage from './RedirectToLognin/RedirectToLoginpage';
import VieworAddHelpers from './VieworAddHelpers/VieworAddHelpers';
import MyInvoicePage from './Myinvoice/MyInvoicePage';
import ChatPage from './ChatPage/ChatPage';
import MycarsPage from './ViewMyCars/MycarsPage';
import AddorViewPaymentmethod from './AddOrViewPaymentMethod/AddorViewPaymentmethod';
import AddorViewMyTickets from './AddorViewMyTicktets/AddorViewMyTickets';
import AddPayment from './AddPaymentMethod/AddPayment';
import UpdatePayment from './UpdatePaymentMethod/UpdatePayment';
import PaymentList from './MyPaymentMethodList/PaymentList';
import MyHelpersList from './MyAllHelperlist/MyHelpersList';
import AddNewHelp from './AddNewHelp/AddNewHelp';
import Tickets from './MyTickets/Tickets';
import PaymentPage from './MakePayment/PaymentPage';
import UserList from './UserListPage/UserList';
import UpdateUserPage from './UpdateUser/UpdateUserPage';
import Registerhelp from './RegisterHelp/Registerhelp';
import AddTickets from './AddTickets/AddTickets';
import AllHelpsForAdmin from './AllHelperlistForAdmin/AllHelpsForAdmin';
import SendMail from "./SendEmail/SendEmail";
import UpdateCarPage from './UpdateCar/UpdateCarPage';
import AllInvoices from "./ViewAllinvoices/Allinvoice";
import FamilyView from './FamilyViewByuser/FamilyView';
import UpdateInvoice from "./UpdateInvoice/UpdateInvoicePage";
import UpdateFamilyPage from './UpdateFamily/UpdateFamilyPage';
import ViewPaymentandVerify from "./ViewAllPaymentAndverify/AllPayandVerify";
import UpdateHelpersData from "./UpdateHelpers/UpdateHelperspage";
import AddorviewInvoice from './AddorViewInvoice/AddorviewInvoice';
import AddorMaintainHelps from "./AddorMaintainHelps/AddorMaintainHelps";
import AddInvoicepage from './AddInvoice/AddInvoicepage';
import ViewandResolveTickets from './ViewTicketsAndResolve/TicketAndResolve';
import AddFamilyPage from './AddFamily/AddFamilyPage';
import AddorUpdateFamilyPage from './AddorViewFamily/AddorViewFamilyPage';
import TodoList from './TodoList/TodoList';
import IncomeList from "./IncomePage/IncomePage";
import Unauthorized from "./ErrorPages/401";
import Forbidden from "./ErrorPages/403";
import Notfound from "./ErrorPages/404";

function App() {
  return (
    
    <div>
      <Header />
      <NavBar />
      <Router>
        <Switch>
      
          <Route exact path='/' component={RedirectToLoginpage}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/myprofile' component={Profile}></Route>
          <Route exact path='/updatemyprofile/:id' component={UpdateProfile}></Route>
          <Route exact path='/groupchat' component={ChatPage}></Route>

          <Route exact path='/addorupdatefamilymember' component={AddorUpdateFamilyPage}></Route>
          <Route exact path='/addorupdatecar' component={AddorUpdateCar}></Route>
          <Route exact path='/vieworaddhelpers' component={VieworAddHelpers}></Route>
          <Route exact path='/myinvoices' component={MyInvoicePage}></Route>  
          <Route exact path='/addorviewpaymethod' component={AddorViewPaymentmethod}></Route>
          <Route exact path='/mypaymentmethods' component={PaymentList}></Route>
          <Route exact path='/addorviewmytickets' component={AddorViewMyTickets}></Route>
          <Route exact path='/addpayment' component={AddPayment}></Route>
          <Route exact path='/updatepayment/:id' component={UpdatePayment}></Route>
          <Route exact path='/addnewhelp' component={AddNewHelp}></Route>
          <Route exact path='/myhelperslist' component={MyHelpersList}></Route>
          <Route exact path='/makepayment/:iId' component={PaymentPage}></Route>
          <Route exact path='/addnewcar' component={AddCarPage}></Route>
          <Route exact path='/mycarlist' component={MycarsPage}></Route>
          <Route exact path='/addtickets' component={AddTickets}></Route>
          <Route exact path='/mytickets' component={Tickets}></Route>
          <Route exact path='/updatecar/:id' component={UpdateCarPage}></Route>
          <Route exact path='/addfamilymember' component={AddFamilyPage}></Route>
          <Route exact path='/myfamilymembers' component={FamilyView}></Route>
          <Route exact path='/updatemyfamily/:id' component={UpdateFamilyPage}></Route>
          
          <Route exact path='/userlistforadmin' component={UserList}></Route>
          <Route exact path='/updateuserbyadmin/:id' component={UpdateUserPage}></Route>
          <Route exact path='/registerhelpbyadmin' component={Registerhelp}></Route>
          <Route exact path='/allhelpsforadmin' component={AllHelpsForAdmin}></Route>
          <Route exact path='/sendmailbyadmin' component={SendMail}></Route>
          <Route exact path='/invoicelistforadmin' component={AllInvoices}></Route>
          <Route exact path='/updateinvoicebyadmin/:id' component={UpdateInvoice}></Route>
          <Route exact path='/verifypaymentbyadmin' component={ViewPaymentandVerify}></Route>
          <Route exact path='/updatehelpbyadmin/:id' component={UpdateHelpersData}></Route>
          <Route exact path='/addorviewinvoicesbyadmin' component={AddorviewInvoice}></Route>
          <Route exact path='/addorviewhelpsbyadmin' component={AddorMaintainHelps}></Route>
          <Route exact path='/addnewinvoicebyadmin' component={AddInvoicepage}></Route>

          <Route exact path='/resolvetickets' component={ViewandResolveTickets}></Route>
          <Route exact path='/todolist' component={TodoList}></Route>
          <Route exact path='/incomes' component={IncomeList}></Route>

          <Route exact path='/unauthorized' component={Unauthorized}></Route>
          <Route exact path='/forbidden' component={Forbidden}></Route>
          <Route component={Notfound}></Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
