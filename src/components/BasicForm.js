import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = props => {
   const {
      value: nameValue,
      isValid: nameIsValid,
      hasError: nameHasError,
      valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameBlurHandler,
      reset: resetName,
   } = useInput(isNotEmpty);

   const {
      value: emailValue,
      isValid: emailIsValid,
      hasError: emailHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmail,
   } = useInput(isEmail);

   let formIsValid = false;

   if (nameIsValid && emailIsValid) {
      formIsValid = true;
   }

   const submitHandler = event => {
      event.preventDefault();

      if (!formIsValid) {
         return;
      }

      console.log('Submitted!');
      console.log(nameValue, emailValue);

      resetName();

      resetEmail();
   };

   const nameClasses = nameHasError ? 'form-control invalid' : 'form-control';

   const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

   return (
      <form onSubmit={submitHandler}>
         <div className="control-group">
            <div className={nameClasses}>
               <label htmlFor="name">Your Name</label>
               <input
                  type="text"
                  id="name"
                  value={nameValue}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
               />
               {nameHasError && (
                  <p className="error-text">Please enter your name.</p>
               )}
            </div>
         </div>
         <div className={emailClasses}>
            <label htmlFor="name">E-Mail Address</label>
            <input
               type="text"
               id="name"
               value={emailValue}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
            />
            {emailHasError && (
               <p className="error-text">Please enter a valid email address.</p>
            )}
         </div>
         <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
         </div>
      </form>
   );
};

export default BasicForm;
