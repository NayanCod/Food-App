export default function GoBack(){

    const goBack = () => {
        window.history.back();
    }

    return(
        <div className="w-3/5 mx-auto mt-4">
            <button onClick={goBack}>
            <svg className="h-8 w-8 text-rose-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="9" y2="16" />  <line x1="5" y1="12" x2="9" y2="8" /></svg>
            </button>
        </div>
    )
}