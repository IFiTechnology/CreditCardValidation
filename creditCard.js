// below is the code to validate a master card

const masterCard =
  /^5[1-5]{1}[0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/.test(
    "5278 5435 6567 7865"
  );

if (masterCard == true) {
  console.log("This is a valid Mastercard");
} else {
  console.log("Invalid Mastercard!!");
}


// Below is the code for validating a visa card

const visaCard1 = /^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{1}$/.test(
  "4676 6567 5776 1"
);

const visaCard2 = /^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/.test(
  "4667 5667 5678 6889"
);

if (visaCard1 == true || visaCard2 == true) {
  console.log("This is a valid Visa Card ");
} else {
  console.log("Invalid VisaCard");
}
