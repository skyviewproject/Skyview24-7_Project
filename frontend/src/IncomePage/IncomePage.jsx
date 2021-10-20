import React, { Component } from 'react'
import backendService from "./Service";
import "../IncomePage/Style.css";
import SesssionService from '../SessionManagement/SesssionService';
import swal from 'sweetalert';

class IncomePage extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            IncomeList: [],
            IncomeTillMonth: 0,
            IncomeOfMonth: 0,
            IncreasedorDecreased: 0,
            MonthIncome: 0,
            MonthIp: '0',
            Month: new Date().getMonth().toString()
        }

        this.changeAmount = this.changeAmount.bind(this);
        this.addIncomeForMonth = this.addIncomeForMonth.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.getRevenueData = this.getRevenueData.bind(this);
    }

    componentDidMount()
    {
        const api = new backendService();

        api.getAllIncomes().then((res) => 
        {
            this.setState(
                {
                    IncomeList: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })

        api.getIncomeOfMonth(this.state.Month).then((res) => 
        {
            this.setState(
                {
                    IncomeOfMonth: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    changeAmount(event){this.setState({IncomeOfMonth: event.target.value});}
    changeMonth(event){this.setState({MonthIp: event.target.value});}


    getRevenueData(event)
    {
        event.preventDefault();
        const api = new backendService();
        var m = this.state.MonthIp;

        api.getIncomeTillMonth(m).then((res) => 
        {
            this.setState(
                {
                    IncomeTillMonth: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })

        api.getIncomeOfMonth(m).then((res) => 
        {
            this.setState(
                {
                    MonthIncome: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })

        api.ifIncomeIncrOrDecr(m).then((res) => 
        {
            this.setState(
                {
                    IncreasedorDecreased: res.data
                }
            );
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    addIncomeForMonth(event)
    {
        const api = new backendService();
        event.preventDefault();
        var income = {
            incomeMonth: this.state.Month,
            incomeAmount: this.state.IncomeOfMonth
        }

        swal({
            title: "Are you sure?",
            text: `${ JSON.stringify(income)}`,
            icon: "warning",
            buttons: true,
          })
          .then((update) => {
            if (update) 
            {
                
                api.addIncomeForMonth(income).then((res) =>
                {
                    console.log(res.status);
                    if(res.status == 200)
                    {
                        swal("Revenue for this Month Updated Successfully!", {
                            icon: "success",
                          });
                          
                        window.location.href = "/incomes";
                    }
                })
                .catch((error) =>
                {
                    swal({
                        title: "Error",
                        text: `${error}`,
                        icon: "error",
                    });
                })
            } else {
              swal("Updating Revenue Aborted!");
            }
        });

    }

    render() {
        const user = new SesssionService();

        if(user.getUserSession()==null)
        {
            window.location.href = "/unauthorized"
        }

        else
        {
            if(user.getUserRole() !== "ROLE_SUPERVISIOR")
            {
                window.location.href = "/forbidden"
            }

            else
            {
        
                return (
                    <div class="wrapperincomepage">
                        <div class="mnhimn">
                            <form>
                                <label for="month">Current Month: </label>
                                <select name="month" id="month" value={this.state.Month} disabled>
                                    <option value="0">January</option>
                                    <option value="1">February</option>
                                    <option value="2">March</option>
                                    <option value="3">April</option>
                                    <option value="4">May</option>
                                    <option value="5">Tune</option>
                                    <option value="6">July</option>
                                    <option value="7">August</option>
                                    <option value="8">Septempber</option>
                                    <option value="9">October</option>
                                    <option value="10">November</option>
                                    <option value="11">December</option>
                                </select><br />

                                <label for="amount">Amount: </label>
                                <input type="number" name="amount" id="amount" onChange={this.changeAmount} value={parseInt(this.state.IncomeOfMonth)}/><br />
                                <button onClick={this.addIncomeForMonth}>Change Revenue</button><br />
                            </form>
                        </div>

                        <div class="imndet">
                            <div className="frmprt">
                                <form>
                                    <label for="month">Select Month</label>
                                    <select name="month" id="month" onChange={this.changeMonth}>
                                        <option value="0">January</option>
                                        <option value="1">February</option>
                                        <option value="2">March</option>
                                        <option value="3">April</option>
                                        <option value="4">May</option>
                                        <option value="5">Tune</option>
                                        <option value="6">July</option>
                                        <option value="7">August</option>
                                        <option value="8">Septempber</option>
                                        <option value="9">October</option>
                                        <option value="10">November</option>
                                        <option value="11">December</option>
                                    </select>

                                    <button onClick={this.getRevenueData}>Get Revenue</button>
                                </form>
                            </div>

                            <div class="dtaprt">
                                <div id="subdiv1">
                                    <h3>{this.state.MonthIncome}</h3>
                                    <h5>Income in Month</h5>
                                </div>

                                <div id="subdiv2">
                                    <h3>{this.state.IncomeTillMonth}</h3>
                                    <h5>Income Till Month</h5>
                                </div>

                                <div id="subdiv3">
                                    <h3>{this.state.IncreasedorDecreased}</h3>
                                    <h5>Increased/Decreased By</h5>
                                </div>
                            </div>
                        </div>

                        <div class="grphld">

                        </div>
                    </div>
                
                )
            }       
        }

    }
}

export default IncomePage
