import { useState, useEffect } from "react";
import CreateStackedColumnPlot from "../Chart/BarChart/StackedColumnPlot";
import { SleepDataInterface } from "../../scripts/extractData";

type GraficoBarreProps = {
    sleepDataWeek: SleepDataInterface[][];
    colors: string[];
    stageOrder: string[];
    settMese: boolean;
    setSettMese: (value: boolean) => void;
};

function GraficoBarre(props: GraficoBarreProps) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false); // Simula il caricamento dei dati
        }, 500);
        return () => clearTimeout(timeout);
    }, [props.settMese, props.sleepDataWeek]);

    return (
        <div>
            <div className="row px-5 mt-2 mb-4">
                <div className="col col-sm-6 col-12 my-2 my-sm-0 mx-sm-0 mx-2">
                    <button
                        onClick={() => props.setSettMese(true)}
                        className="btn px-4"
                        style={{
                            backgroundColor: "#18c599",
                            color: "white",
                            transition: "all 0.2s ease",
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 8px rgba(0, 0, 0, 0.3)";
                            e.currentTarget.style.transform = "scale(0.95)";
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                        onTouchStart={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 8px rgba(0, 0, 0, 0.3)";
                            e.currentTarget.style.transform = "scale(0.95)";
                        }}
                        onTouchEnd={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        SETTIMANA
                    </button>
                </div>
                <div className="col col-sm-6 col-12 my-2 my-sm-0 mx-sm-0 mx-2">
                    <button
                        onClick={() => props.setSettMese(false)}
                        className="btn px-5"
                        style={{
                            backgroundColor: "#18c599",
                            color: "white",
                            transition: "all 0.2s ease",
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 8px rgba(0, 0, 0, 0.3)";
                            e.currentTarget.style.transform = "scale(0.95)";
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                        onTouchStart={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 8px rgba(0, 0, 0, 0.3)";
                            e.currentTarget.style.transform = "scale(0.95)";
                        }}
                        onTouchEnd={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        MESE
                    </button>
                </div>
            </div>
            {isLoading ? (
                <div
                    className="spinner-border m-5"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <CreateStackedColumnPlot
                    dati={props.sleepDataWeek || []}
                    colors={props.colors}
                    ordine={props.stageOrder}
                    settMese={props.settMese}
                />
            )}
        </div>
    );
}

export default GraficoBarre;
