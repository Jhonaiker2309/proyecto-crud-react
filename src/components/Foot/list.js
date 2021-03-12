const createArrayOfNumbers = (first,total) => {
    let array = []
    for(let i = first; i < total; i++){
        let element = {
            value: i + 1,
            label: `${i + 1}`
        }
        array.push(element)
    }
    return array
}

let months = [{
    value: 1,
    label: "Enero"
},
{
    value: 2,
    label: "Febrero"
},
{
    value: 3,
    label: "Marzo"
},
{
    value: 4,
    label: "Abril"
},
{
    value: 5,
    label: "Mayo"
},
{
    value: 6,
    label: "Junio"
},
{
    value: 7,
    label: "Julio"
},
{
    value: 8,
    label: "Agosto"
},
{
    value: 9,
    label: "Septiembre"
},
{
    value: 10,
    label: "Octubre"
},
{
    value: 11,
    label: "Noviembre"
},
{
    value: 12,
    label: "Diciembre"
},
]

export const initialMonth = months
export const lastMonth = months
export const initialDay = createArrayOfNumbers(0,31);
export const lastDay = createArrayOfNumbers(0,31);
export const initialYear = createArrayOfNumbers(2000,2021);
export const lastYear = createArrayOfNumbers(2000,2021);

