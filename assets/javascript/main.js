const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const age = document.querySelector('#age')
const sex = document.querySelector('#sex')
const bmr = document.querySelector('#bmr')
const pal = document.querySelector('#pal')
const tee = document.querySelector('#tee')
const form = document.querySelector('form')

const bmrCalc = () => {
    if (sex.value == 'male') {
        sum = 66.5 + (13.75 * weight.value) + (5.003 * height.value) - (6.75 * age.value)
        bmr.value = Math.round(sum)
    } else {
        sum = 655.1 + (9.563 * weight.value) + (1.850 * height.value) - (4.676 * age.value)
        bmr.value = Math.round(sum)
    }
}

const teeCalc = () => {
    if (pal.value == 'no') {
        sum = bmr.value * 1.2
        tee.value = Math.round(sum)
    }
    else if (pal.value == 'light') {
        sum = bmr.value * 1.375
        tee.value = Math.round(sum)
    }
    else if (pal.value == 'moderate') {
        sum = bmr.value * 1.55
        tee.value = Math.round(sum)
    }
    else if (pal.value == 'hard') {
        sum = bmr.value * 1.725
        tee.value = Math.round(sum)
    }
    else if (pal.value == 'pro') {
        sum = bmr.value * 1.9
        tee.value = Math.round(sum)
    }
}

form.addEventListener('input', bmrCalc)
form.addEventListener('input', teeCalc)




