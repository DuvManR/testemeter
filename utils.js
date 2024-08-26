





export function handleInput(inputElement, minVal, maxVal, row)
{
    inputElement.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
        let val = parseInt(this.value);
        if (val < minVal) this.value = minVal;
        if (val > maxVal) this.value = maxVal;

        if (["grade, units"].includes(inputElement.name)) 
        {
            updateBonus(row);
            updateAvg();
        }
    });
}

export function Testtafasdfoi(){
    console.log('hey');
}
