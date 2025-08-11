export default function currencyFormater(amount,locale = "en-IN" , currency = "INR"){

    return new Intl.NumberFormat(locale,{
        style: 'currency',
        currency:currency
    }).format(amount)
}