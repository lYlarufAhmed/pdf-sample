import React, {FC, ReactElement} from "react";

type PreviewerProps = {
    className: string,
    handleFileInput: (ev:any)=>void
}
const Previewer: FC<PreviewerProps> = ({className, handleFileInput}): ReactElement =>{
    // @ts-ignore
    return (
        <div className={className}>
            <h4>Left Preview</h4>
            <div className="InputContainer">
                <input id={`${className}-Upload`} onChange={handleFileInput} type={'file'}/>
            </div>
            <textarea className={'TextArea'} defaultValue={'XML Preview'}/>
        </div>
    )
}

export default Previewer