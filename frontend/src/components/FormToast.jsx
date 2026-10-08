function FormToast(props) {

    const color=props.color
    const title=props.title
    const message=props.message

    return(
    <>
        <div class="toast show" role="error" aria-live="assertive" aria-atomic="true">
            <div class={"toast-header bg-"+color+" text-white"}>
                <strong class="me-auto">{title}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                {message}
            </div>
        </div> 
    </> 
    )
}

export default FormToast