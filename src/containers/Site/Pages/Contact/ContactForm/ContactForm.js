import React from 'react'
import Btn from '../../../../../components/ui/Buttons/Button'
import { withFormik } from 'formik'
import * as yup from 'yup'
const ContactForm = (props) => {
    return (
        <>
            {props.children}
            <div className="mb-2">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom </label><span className="badge bg-warning"> (minimum 5 caractere)</span>
                        <input type="text" onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.nom} className="form-control" name="nom" id="nom" />
                        {
                           props.touched.nom && props.errors.nom && <div className="text-danger">
                                {props.errors.nom}
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.email} className="form-control" id="email" name="email" />
                        {
                           props.touched.email && props.errors.email && <div className="text-danger">
                                {props.errors.email}
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Votre Message</label><span className="badge bg-warning"> (entre 100 et 200 caracter)</span>
                        <textarea className="form-control" onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.message} name="message" id="message" rows="3"></textarea>
                        {
                           props.touched.message && props.errors.message && <div className="text-danger">
                                {props.errors.message}
                            </div>
                        }
                    </div>
                    <button className="btn btn-primary" onClick={props.handleSubmit}>Valider</button>
                </form>
            </div>
        </>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema: yup.object().shape({
        nom: yup.string()
            .min(5, 'Le nom doit avoir plus de 5 caracter')
            .required('Le nom est obligatoire'),
        email: yup.string()
            .email('Format Email Incorrect')
            .required('Email Requis'),
        message: yup.string()
            .min(100, 'Le message doit faire plus de 100 caractere')
            .max(200, 'Le message doit faire moins de 200 caractere')
            .required('Le message est obligatoire')
    }),
    handleSubmit: (values, { props }) => {
        alert('Message Envoye')
    }
})(ContactForm)