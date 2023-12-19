import moment from 'moment'
export const FormatDate =(data)=>{
    return moment(data).format('YYYY-MM-DD')
}
export const FormatTime =(time)=>{
    let hour = `${parseInt(time / 60)}`.padStart(2,0)
    let minute =`${ time % 60}`.padStart(2,0)
    let result = `${hour}:${minute}`
    return result
}
export const FormatDateAttendance =(data)=>{
    return moment(data).format('DD.MM')
}