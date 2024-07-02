export const Validation = (
  customInputValidationCheck: any = [],
  element = document
) => {
  let validate = true;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const collection: any = element.querySelectorAll("input ,  textarea , select");
  for (let i = 0; i < collection.length; i++) {
    // eslint-disable-next-line prefer-const
    let x: any = collection[i];

    if (collection[i].name) {
      collection[i].style.border = "";

      if (collection[i].required && !collection[i].value) {
        validate = false;
        collection[i].style.border = "1px solid red";

        if (x.previousSibling) {
          x.previousSibling.classList.add("requiredMessage");
        } else {
          x.parentElement.classList.add("requiredMessage");
        }
      }

      if (customInputValidationCheck && customInputValidationCheck.length) {

        const y: any = collection[i].name
        if (
          customInputValidationCheck.includes(y) &&
          !collection[i].value
        ) {
          validate = false;
          if (collection[i].name === "description") {
            x.parentElement.classList.add("requiredMessage");
          }
          collection[i].style.border = "1px solid red";
        }
      }
    }
  }
  if (!validate) {
    alert("Required fields can not be empty")
  }
  return validate;
};


// export const toast = (type: any, msg: any) => {
//   if (type === true) {
//     cogoToast.success(msg, { position: "bottom-right" });
//   }

//   if (type === false) {
//     cogoToast.error(msg, { position: "bottom-right" });
//   }
// };

export const toast = (type: any, msg: any) => {
  if (type === true) {
    alert(msg);
  }

  if (type === false) {
    alert(msg);
  }
};


export const piValidation = (data: any) => {
  
  const end_date = new Date(data?.end_date)
  const start_date = new Date(data?.start_date)
  const today = new Date()
  if (today <= end_date && today >= start_date ) {
    return true
  }
  return
};

