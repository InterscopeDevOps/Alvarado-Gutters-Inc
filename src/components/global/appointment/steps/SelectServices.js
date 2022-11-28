import React, {useContext} from 'react'
import { GlobalDataContext } from '../../../../context/context'


const SelectServices = () => {

    const { rpdata } = useContext(GlobalDataContext)

    const servicesTotal = rpdata?.dbServices?.map((services, index) => {
        return(
            <option value={services.name} key={index}>
                {services.name}
            </option>

        )
    })

    return (
        <div>
            <h4 className='capitalize'>Select Services</h4>
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <select class="form-select form-select-lg
                        block
                        w-full
                        px-3
                        py-5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:borderColor focus:outline-none"
                        aria-label="Default select example"
                    >
                        <option selected>Select Services</option>
                        {servicesTotal}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectServices