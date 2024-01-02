"use client"

import { FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

export default function BillingPage() {
    const [actions, setActions] = useState(Array(5).fill(0));

    const handleInputChange = (index: number, value: string) => {
        // Validate input to be within -9 to 9
        const newValue = Math.max(-9, Math.min(9, parseInt(value, 10)));

        const newActions = [...actions];
        newActions[index] = newValue;
        setActions(newActions);
    };

    return (
        <section className="ml-20 mt-5 bg-gray-500 opacity-50 w-[94vw] flex flex-col h-[96vh] items-center border border-solid rounded-xl">
            <div className='w-[95%] h-[50vh] mt-5 border-2 border-red-500 flex'>
                <div className='w-full pl-96 h-full border-2 border-blue-500'>
                    {/* Relógio */}
                    <div className='w-[55%] h-full border-2 border-blue-500 flex items-center justify-center rounded-full'>
                        {/* Renderizando ponteiro para cada ação com rotação de acordo com o valor */}
                        {actions.map((action, index) => (
                            action !== 0 && (
                                <div key={index} style={{ transform: `rotate(${action * 36}deg)` }}>
                                    <FiArrowRight className="text-white text-4xl" />
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <div className='w-[35%] h-full border-2 border-yellow-500 flex flex-col justify-between pl-10 pt-10'>
                    {/* Coluna 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Ações */}
                        {actions.map((action, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <label htmlFor={`action-${index}`}>XFV</label>
                                <input
                                    className='border-2 border-green-500 w-16 text-black'
                                    type="number"
                                    id={`action-${index}`}
                                    value={action} // Always display the value
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    min="-9"
                                    max="9"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
