export default function NumberFormat(number){
    if (number != "" && number != null) {
        let formattedNumber = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        return formattedNumber;
    }

    return ""
}