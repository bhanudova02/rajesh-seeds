export function LoadingPopup() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white  flex items-center justify-center z-50">
            <div className="flex items-center gap-2">
                <div className="w-20 h-20 flex justify-center items-center">
                    <img src="/ripples.svg" alt="ripple" />
                </div>
                <h2 className="text-center font-bold">Loading....</h2>
            </div>
        </div>
    );
}
