export default (dat) => {
    let result =[]
    dat.map((el, index) => {
        let date = `${el.date[8]}${el.date[9]}`;
        let hour = parseInt(`${el.time[0]}${el.time[1]}`)
        let minute = `${el.time[3]}${el.time[4]}`
        let period = ''
        if(hour > 12){
            period = 'PM'
            hour = (hour-12).toString()
        }else{
            period ='AM'
            hour = hour.toString()
        }
        hour = `${hour}:${minute}`
        result[index] = {
            id: el.id,
            date: date,
            day: el.day,
            hour: hour,
            period: period,
            addressOne: el.addressOne,
            addressTwo: el.addressTwo,
            cost: el.cost,
            number: el.number
        }
        return result
    })
    return result
}