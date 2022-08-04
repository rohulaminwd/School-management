import { format } from 'date-fns';
import React from 'react';
import { HiPlus } from 'react-icons/hi';

const ResultCart = ({exam}) => {
    let great = 0;

    exam && exam.result.map(x => {
        const i = parseFloat(x.mcq);
        const w = parseFloat(x.writing)
        if(x.mcq){
            great = great + (i + w ); 
        }else(
            great = great + w 
        ) 
    })

    const handleGreat = (p) => {
        if(p < 33 ){
            return 'F';
        }
        else if(p >= 33 && p < 40 ){
            return 'D';
        }
        else if(p >= 40 && p < 50 ){
            return 'C';
        }
        else if(p >= 50 && p < 60 ){
            return 'B';
        }
        else if(p >= 60 && p < 70 ){
            return 'A-';
        }
        else if(p >= 70 && p < 80 ){
            return 'A';
        }
        else if(p >= 80 && p <= 100 ){
            return 'A+';
        }
    }
    return (
        <div tabindex="0" className='collapse collapse-arrow bg-white w-full rounded-lg p-0'>
            <div className='collapse-title w-full flex justify-between items-center'>
                <div>
                    <h1 className='text-xl font-bold text-cyan-900'>{exam.name}</h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-green-600'>Mark: <span className='text-purple-600'>{great}</span></h1>
                </div>
            </div>
            <div className='collapse-content w-full grid gap-2'>
                {
                    exam && exam.result.map(results => <div>
                        <div class="border p-2 rounded-lg border-base-300 bg-base-100">
                            <div class="text-xl font-medium">
                                <div className='flex items-center justify-between'>
                                  <p className='text-xl font-bold text-purple-800'>{results.subject}</p>
                                  <div className='flex items-center'>
                                    <p className='text-xl font-bold'>{results.writing}</p>
                                    { results.mcq &&<span className='mx-1 text-purple-800'><HiPlus /> </span>}
                                    { results.mcq && <p className='font-bold'>{results.mcq}</p>}
                                    { results.mcq &&<span className='mx-1 text-purple-800'>=</span>}
                                    { results.mcq && <p className='font-bold'> {parseFloat(results.writing) + parseFloat(results.mcq)}</p>}
                                    { results.mcq && <p className='font-bold ml-2 text-purple-700'>{handleGreat(parseFloat(results.writing) + parseFloat(results.mcq))}</p>}
                                    { !results.mcq && <p className='font-bold ml-2 text-purple-700'>{handleGreat(parseFloat(results.writing))}</p>}
                                  </div>
                                </div>
                            </div>
                            <div class="mt-2"> 
                                <div className="">
                                 <p className='text-sm'>Writing{results.feedback}</p>
                                 <div className='flex items-center justify-between'>
                                    <h1 className='text-sm font-bold text-cyan-700'>{results.sir}</h1>
                                    <h1 className='text-xs text-green-900'>{format(new Date(results.date), 'PP')}</h1>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ResultCart;