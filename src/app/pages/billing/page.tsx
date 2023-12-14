"use client";

import { useState } from 'react';

export default function BillingPage() {
    const [inputValues, setInputValues] = useState<number[]>([]); // Update the type of inputValues to be an array of numbers
    const [labels, setLabels] = useState<string[]>([]); // Update the type of labels to be an array of strings

    const handleInputChange = (index: number, value: number) => {
        const updatedInputs = [...inputValues];
        updatedInputs[index] = value;
        setInputValues(updatedInputs);
    };

    const handleLabelChange = (index: number, label: string) => {
        const updatedLabels = [...labels];
        updatedLabels[index] = label;
        setLabels(updatedLabels);
    };

    const addInput = () => {
        setInputValues([...inputValues, 0]);
        setLabels([...labels, '']);
    };

    return (
        <section className="ml-20 mt-5 bg-gray-500 opacity-50 w-[94vw] flex flex-col h-[96vh] items-center border border-solid rounded-xl">
            <div className="flex flex-col items-center relative">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                    {inputValues.map((value, index) => (
                        <div
                            key={index}
                            className="absolute w-2 h-20 bg-blue-500 transform origin-center rotate-90"
                            style={{
                                transform: `rotate(${(value / 10) * 360}deg)`,
                            }}
                        ></div>
                    ))}
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full absolute"></div>
            </div>
            <div className="flex flex-col items-center">
                {inputValues.map((value, index) => (
                    <div key={index} className="flex items-center mt-3">
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => handleInputChange(index, parseInt(e.target.value))}
                            className="border border-gray-400 rounded-md p-1 mr-2 text-black"
                            min={-10}
                            max={10}
                        />
                        <input
                            type="text"
                            value={labels[index]}
                            onChange={(e) => handleLabelChange(index, e.target.value)}
                            placeholder="Descrição"
                            className="border border-gray-400 rounded-md p-1 text-black"
                        />
                    </div>
                ))}
                <button onClick={addInput} className="mt-3 p-1 bg-blue-500 text-white rounded-md">
                    Adicionar Input
                </button>
            </div>
        </section>
    );
}
