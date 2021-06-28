const RequiredEl = props => <span style = {{color: 'red'}}>*</span>

const InlineInput = props => {
    const label = props.label || 'Password'
    const required = props.required || false
    const placeholder = props.placeholder || ''
    const name = props.name
    const type = props.type
    const pattern = props.pattern

    return <>
        <div className='col'>
            <div className='row'>
                <div className="col-sm-4">
                    <label className="col-form-label">
                        {label}
                        {required ? <RequiredEl/> : null}
                    </label>
                </div>
                <div className="col-sm-8">
                    <input name = {name} required={required} 
                    placeholder={placeholder} className="form-control"
                    value = {props.value} onChange = {(event) => props.onChange(event)}
                    type = {type} pattern={pattern} />
                </div>
            </div>
        </div>
    </>
}

const SelectInput = props => {

    const required = props.required || false
    const name = props.name
    let value = props.value || 'normal'
    
    return <div className = 'col'>
        <div className = 'row'>
            <label className = 'col-sm-4'>Select you user type 
                {required ? <RequiredEl/> : null}</label>

            <div className = 'col-sm-8'>
                <select value = {value} name = {name} 
                    required= {required} className="form-select mb-3"
                    onChange = {(event) => props.onChange(event)} >
                    <option selected value="normal">Normal</option>
                    <option value="owner">Owner</option>
                    <option value="agent">Agent</option>
                </select>
            </div>
        </div>
    </div>
}

export {
    InlineInput,
    SelectInput,
}