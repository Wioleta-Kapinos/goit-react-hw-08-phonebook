import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <RotatingLines
                strokeColor="black"
                strokeWidth="5"
                animationDuration="0.85"
                width="50"
                visible={true}
            />
        </div>
    )
}