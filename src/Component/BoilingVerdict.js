export default function BoilingVerdict({temperature}) {
    if(temperature >= 100){
        return('The water would boiling')
    }
    else {
        return('The water would not boiling')
    }
}