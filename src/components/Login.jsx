import React from 'react';
	
import { Link } from 'react-router-dom';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
// import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import { fa-anchor } from "@fortawesome/free-solid-svg-icons";
function Login(props) {
const{
    
    isSubmitting, /*nos indica si actualmente se esta en proceso de submision la forma, es util para no permitir que hagan submit mas de una vez al mismo tiempo*/
    isValid,
    errors,
   
} = props;

    return(
        <div className="container mt-3 border p-5">
                    <Form className="form-group" > {/*metodo que viene de las propiedades del componente*/}

                    <div>
                     {/* <FontAwesomeIcon icon={[fa-anchor]} />  */}
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <Field className="form-control" name="email" type="email" placeholder="email"/>
                        <ErrorMessage name="email">
                        {message => <div className="error">{message}</div> }
                        </ErrorMessage>
                    </div>
                <div >
                 
                    <Field className="form-control mb-3" name="password" type="password" placeholder="password"/>
                    <ErrorMessage name="password">
                        {message => <div className="error">{message}</div> }
                    </ErrorMessage>
                </div>
                       <Link to="/Components/HomeContainer">
                        <button
                           type="button" 
                            className = {`submit ${isSubmitting || !isValid ? 'disabled' : ''}`} 
                            disabled={isSubmitting || !isValid} /*desabilita el boton si no se cumplen los requisitos de entrada*/
                            >Enviar</button>
                            </Link>
                            
          

                    
            </Form>
        </div>
    );
}
export default  withFormik({
    mapPropsToValues(props){
        return{
            email: '',
            password:'',
        };
    },

    validate(values){
        const errors = {}
        if(!values.email){
            errors.email ='Email is required';    }
            
        if (!values.password){
            errors.password = 'Password is required';
        } else if (values.password.length < 4) {
            errors.password = 'Password must be at least 4 characters';
        }
        return errors;
    },
    handleSubmit (values, formikBag){ /*es una funcion que pasa los valores de los inputs*/
        console.log(values)
        formikBag.setSubmitting(false) /*para desactivar la funcion una vez que se hizo clik y no siga estando habilitado el boton*/
    },
    })(Login); 