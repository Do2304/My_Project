export function rgbValue(){
    return Math.floor(Math.random() * 256)
}

export function generateColors(num){
    const colors = []
    for (let i=0; i< num;i++){
        const red = rgbValue()
        const blue = rgbValue()
        const green = rgbValue()
        colors.push(`rgb(${red},${blue},${green})`)
    }
    return colors;
}
  