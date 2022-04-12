
const PSkell = () => {
    return(
        <div className="max-w-4xl w-11/12 mx-auto overflow-hidden bg-logo1 rounded-lg shadow-md dark:bg-gray-800 my-8">
            <div className="flex bg-logo3 w-full h-64 justify-center">
                <div className="w-9/12 bg-logo4 animate-pulse"/>
            </div>
            <div className="p-5">
                <div className="block mx-1 h-4 w-24 bg-indigo-200 rounded-md animate-pulse"/>
                <div className="flex mx-1 mt-2 w-full justify-between">
                    <div className="h-4 w-14 bg-red-200 rounded-md animate-pulse" />
                    <div className="h-4 w-14 bg-yellow-100 rounded-md animate-pulse" />
                </div>
            </div>
        </div>
    )
}

export default function CardSkelLoding() {
    return (
        <div>
            <PSkell />     
            <PSkell />  
            <PSkell />  
        </div>
    )
}
