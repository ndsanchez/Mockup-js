import React from 'react'
import $ from 'jquery'
import '../styles/styles.css'
import Home from '../pages/Home'
import Messages from '../pages/Messages'
import Wishlist from '../pages/Wishlist'
import Settings from '../pages/Settings'
import Account from '../pages/Account'
import alerts from '../functions/alerts'
import checkData from '../functions/checkData'

var dataBase = [
        {
            id:0,
            addressOne: 'San Francisco, TX, 33619',
            addressTwo: 'Atlanta, GA, 30123',
            cost: '250',
            date: '2019-06-10',
            day:'Monday',
            number: '1',
            time: '14:28'
        },
        {
            id:1,
            addressOne: 'Houston, TX, 33619',
            addressTwo: 'Atlanta, GA, 30123',
            cost: '250',
            date: '2019-06-10',
            day:'Monday',
            number: '1',
            time: '14:28'
        },
        {
            id:2,
            addressOne: 'Houston, TX, 33619',
            addressTwo: 'Atlanta, GA, 30123',
            cost: '250',
            date: '2019-06-10',
            day:'Monday',
            number: '1',
            time: '14:28'
        }
    ]

class App extends React.Component{
    state ={
        data:[],
        dataForm: {
            addressOne: '',
            addressTwo: '',
            cost: '',
            date: '',
            day:'Monday',
            number: '',
            time: ''
        },
        menuActive:{
            home: true,
            messages: false,
            wishlist: false,
            settings: false,
            account: false
        },
        switch:{
            sale: false,
            calendar: false,
            heart: false
        },
        submitState: 'Save'
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () =>{
        let res = checkData(dataBase)
        this.setState({
            data: res
        })  
    }

    handleMenu = (id) =>{
        if(id === '#home')      this.setState({menuActive:{home: true,messages: false,wishlist: false,settings: false,account: false}})
        if(id === '#messages')  this.setState({menuActive:{home: false,messages: true,wishlist: false,settings: false,account: false}})
        if(id === '#wishlist')  this.setState({menuActive:{home: false,messages: false,wishlist: true,settings: false,account: false}})
        if(id === '#settings')  this.setState({menuActive:{home: false,messages: false,wishlist: false,settings: true,account: false}})
        if(id === '#account')   this.setState({menuActive:{home: false,messages: false,wishlist: false,settings: false,account: true}})   
    }

    handleSwitch = (checked,e,id) =>{
        if(checked && id === 'switchSale')      this.setState({switch:{...this.state.switch,sale: true}})     
        if(!checked && id === 'switchSale')     this.setState({switch:{...this.state.switch,sale: false}})
        if(checked && id === 'switchCalendar')  this.setState({switch:{...this.state.switch,calendar: true}})     
        if(!checked && id === 'switchCalendar') this.setState({switch:{...this.state.switch,calendar: false}})     
        if(checked && id === 'switchHeart')     this.setState({switch:{...this.state.switch,heart: true}})     
        if(!checked && id === 'switchHeart')    this.setState({switch:{...this.state.switch,heart: false}})     
    }

    handleSubmit = () =>{
        if(this.state.submitState === 'Save'){
            let empty = false;
            let prop
            for (prop in this.state.dataForm) {
                if(this.state.dataForm[prop] === '') empty = true
            }
            if(!empty){
                this.handleClose()
                alerts.successAlert()
                console.log('your request is ready to be processed')
                console.log('Data Ticket: ', this.state.dataForm)  
            }else{
                alerts.warningAlert()
            }
        }else{
            alerts.confirmAlert('The ticket will be updated!','Updated')
        }
        
    }

    formChange = (e) => {
        this.setState({     
                    dataForm:{...this.state.dataForm,[e.target.name]: e.target.value}
        })
    }

    handleEdit = (id) => {
        this.setState({
            dataForm: {
                addressOne: dataBase[id].addressOne,
                addressTwo: dataBase[id].addressTwo,
                cost: dataBase[id].cost,
                date: dataBase[id].date,
                day:dataBase[id].day,
                number: dataBase[id].number,
                time: dataBase[id].time
            },
            submitState: 'Update'
        })
    }

    handleDelete = (id) => {
        alerts.confirmAlert("You won't be able to revert this!",'Deleted')
    }
    
    handleFloating = () =>{
        this.setState({
            dataForm: {
                addressOne: '',
                addressTwo: '',
                cost: '',
                date: '',
                day:'Monday',
                number: '',
                time: ''
            },
            submitState: 'Save'
        })
    }

    handleClose = () =>{ //Close Modal
        $(this.rf).click()
    }

    render(){
        if(this.state.menuActive.home)      return <Home 
                                                        handleClose={this.handleClose} 
                                                        refModal={rf => this.rf = rf} 
                                                        submitState={this.state.submitState} 
                                                        handleFloating={this.handleFloating} 
                                                        handleDelete={this.handleDelete} 
                                                        handleEdit={this.handleEdit} 
                                                        dataForm={this.state.dataForm} 
                                                        formChange={this.formChange} 
                                                        handleSubmit={this.handleSubmit} 
                                                        dataTicket={this.state.data} 
                                                        switchState={this.state.switch} 
                                                        handleSwitch={this.handleSwitch} 
                                                        handleMenu={this.handleMenu} 
                                                        menuActive={this.state.menuActive}
                                                    />
        if(this.state.menuActive.messages)  return <Messages 
                                                        switchState={this.state.switch} 
                                                        handleSwitch={this.handleSwitch} 
                                                        handleMenu={this.handleMenu} 
                                                        menuActive={this.state.menuActive}
                                                    /> 
        if(this.state.menuActive.wishlist)  return <Wishlist 
                                                        switchState={this.state.switch} 
                                                        handleSwitch={this.handleSwitch} 
                                                        handleMenu={this.handleMenu} 
                                                        menuActive={this.state.menuActive}
                                                    /> 
        if(this.state.menuActive.settings)  return <Settings 
                                                        switchState={this.state.switch} 
                                                        handleSwitch={this.handleSwitch} 
                                                        handleMenu={this.handleMenu} 
                                                        menuActive={this.state.menuActive}
                                                    /> 
        if(this.state.menuActive.account)   return  <Account 
                                                        switchState={this.state.switch} 
                                                        handleSwitch={this.handleSwitch} 
                                                        handleMenu={this.handleMenu} 
                                                        menuActive={this.state.menuActive}
                                                    /> 
    }
}

export default App

