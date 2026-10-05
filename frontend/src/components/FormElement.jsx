
function FormElement(props) {
    const label=props.label
    const name=props.name
    const required=props.required
    const type=props.type

    const className="text-primary fw-medium form-control py-1 px-4 border-primary bg-light"
  return (

    <div className="d-flex flex-column p-2 gap-2">
        <label htmlFor={name}>
            {label}{required && <span className="text-danger fs-5">*</span>}
        </label>
        {
        (type!="textarea") &&
         <input className={className+' rounded-pill'} 
        type={type} name={name} id={name}/>
        }

        {
        (type=="textarea") && 
        <textarea className={className+' rounded-4'} style={{height:'128px'}} 
        type={type} name={name} id={name}></textarea>
        }
    </div>
  )
}

export default FormElement
