import React from 'react'

const ContentTime = () => {

    // obtener la fecha actual
    let dateActual = new Date();
    let [month, days, year] = [
        dateActual.getMonth() + 1,
        dateActual.getDate().length > 1 ? dateActual.getDate() : '0' + dateActual.getDate(),
        dateActual.getFullYear()
    ];

    console.log('fecha',year+'-'+month +'-'+days)

    return (
        <div className='flex flex-col'>
            <p className='font-medium md:font-semibold pb-2'>
                Below you can find a list of available time slots for Services. Click on a time slot to proceewd with booking.
            </p>
            <div className='bolck md:flex justify-around'>

                <div className='border px-3 py-5 w-full md:w-[45%] mb-5'>
                    <input
                        type={'date'}
                        name='date'
                        min={year+'-'+month +'-'+days}
                        required
                    />
                </div>
                <div className='border px-3 py-5 w-full md:w-[45%] mb-5'>
                    <input
                        type={'time'}
                        name={'time'}
                        min={'09:00'}
                        max={'18:00'}
                        required
                    />
                </div>
            </div>

        </div>
    )
}

export default ContentTime
