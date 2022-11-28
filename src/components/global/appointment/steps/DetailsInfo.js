

export default function Payment() {

  const dbStates = [
    { value: 'AK', name: 'Alaska' },
    { value: 'AL', name: 'Alabama' },
    { value: 'AR', name: 'Arkansas' },
    { value: 'AZ', name: 'Arizona' },
    { value: 'CA', name: 'California' },
    { value: 'CO', name: 'Colorado' },
    { value: 'CT', name: 'Connecticut' },
    { value: 'DC', name: 'DistrictofColumbia' },
    { value: 'DE', name: 'Delaware' },
    { value: 'FL', name: 'Florida' },
    { value: 'GA', name: 'Georgia' },
    { value: 'HI', name: 'Hawaii' },
    { value: 'IA', name: 'Iowa' },
    { value: 'ID', name: 'Idaho' },
    { value: 'IL', name: 'Illinois' },
    { value: 'IN', name: 'Indiana' },
    { value: 'KS', name: 'Kansas' },
    { value: 'KY', name: 'Kentucky' },
    { value: 'LA', name: 'Louisiana' },
    { value: 'MA', name: 'Massachusetts' },
    { value: 'MD', name: 'Maryland' },
    { value: 'ME', name: 'Maine' },
    { value: 'MI', name: 'Michigan' },
    { value: 'MN', name: 'Minnesota' },
    { value: 'MO', name: 'Missouri' },
    { value: 'MS', name: 'Mississippi' },
    { value: 'MT', name: 'Montana' },
    { value: 'NC', name: 'NorthCarolina' },
    { value: 'ND', name: 'NorthDakota' },
    { value: 'NE', name: 'Nebraska' },
    { value: 'NH', name: 'NewHampshire' },
    { value: 'NJ', name: 'NewJersey' },
    { value: 'NM', name: 'NewMexico' },
    { value: 'NV', name: 'Nevada' },
    { value: 'NY', name: 'NewYork' },
    { value: 'OH', name: 'Ohio' },
    { value: 'OK', name: 'Oklahoma' },
    { value: 'OR', name: 'Oregon' },
    { value: 'PA', name: 'Pennsylvania' },
    { value: 'RI', name: 'RhodeIsland' },
    { value: 'SC', name: 'SouthCarolina' },
    { value: 'SD', name: 'SouthDakota' },
    { value: 'TN', name: 'Tennessee' },
    { value: 'TX', name: 'Texas' },
    { value: 'UT', name: 'Utah' },
    { value: 'VA', name: 'Virginia' },
    { value: 'VT', name: 'Vermont' },
    { value: 'WA', name: 'Washington' },
    { value: 'WI', name: 'Wisconsin' },
    { value: 'WV', name: 'WestVirginia' },
    { value: 'WY', name: 'Wyoming' }
  ];

  return (
    <>

      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Name
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              name="name"
              placeholder="Name"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Last Name
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              name="lastname"
              placeholder="Last Name"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>


      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Phone
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              name="phone"
              placeholder="phone"
              type="number"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Email
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Address
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              name="address"
              placeholder="Address"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            State
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <select
              className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected disabled value="Select Your State Of Residence">Select Your State Of Residence</option>
              {
                dbStates.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {
                        item.name
                      }
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Note
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Note..."></textarea>
          </div>
        </div>
      </div>

    </>
  );
}
