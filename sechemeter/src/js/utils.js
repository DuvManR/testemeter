// const corsUrl = "https://cors-anywhere.herokuapp.com/corsdemo"
// const corsUrlLink = '<a href="' + corsUrl + '" target="_blank">' + corsUrl + '</a>'
// `אם שגיאה זאת קופצת בעת חישוב הסכם של בן גוריון, יש להיכנס לקישור:<br> ${corsUrlLink} <br> ללחוץ על הכפתור: <br> 'Request temporary access to the demo server' <br>ולנסות שוב.<br> (חלק ממנגנון אבטחתי של אתר האוניברסיטה - כך תתאפשר לכם גישה ל-24 שעות)`





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