import React from 'react'

export default function Estimator() {
    return (
        <div className='flex h-32 bg-[#f5f5f5] px-20 py-5'>
            <div className='flex justify-center items-center space-x-2'>
                <div className='h-20 w-20'>
                    <img alt="calculator" src='/images/calculator.svg' />
                </div>
                <h1 className='font-Muli font-[900] text-4xl text-[#3A3A3A]'>
                    Car Repair<br />Estimator
                </h1>

                <form>
                    <h1>
                        Get a location-based car repair estimate
                    </h1>
                    <div className='flex'>
                        <select >
                            <option value="" disabled="" >Make</option>
                            <option value="233"  >Daihatsu</option>
                            <option value="235"  >Faw</option>
                            <option value="164"  >Honda</option>
                            <option value="234"  >Isuzu</option>
                            <option value="236"  >KIA</option>
                            <option value="238"  >Mazda</option>
                            <option value="232"  >Mitsubishi</option>
                            <option value="237"  >Nissan</option>
                            <option value="231"  >Suzuki</option>
                            <option value="209"  >Toyota</option>
                        </select>
                        <select>
                        <option value="" disabled="" >Model</option>
                  <option value="96"  >4Runner</option>
                  <option value="100"  >A3 Quattro</option>
                  <option value="101"  >A3 Sportback e-tron</option>
                  <option value="102"  >A6 Quattro</option>
                  <option value="103"  >A7 Quattro</option>
                  <option value="104"  >A8 Quattro</option>
                  <option value="109"  >Avalon</option>
                  <option value="115"  >BRZ</option>
                  <option value="113"  >Bolt EV</option>
                  <option value="117"  >C-Max</option>
                  <option value="138"  >CR-V</option>
                  <option value="119"  >Camaro</option>
                  <option value="120"  >Camry</option>
                  <option value="122"  >Challenger</option>
                  <option value="123"  >Charger</option>
                  <option value="124"  >Cherokee</option>
                  <option value="128"  >City</option>
                  <option value="129"  >Civic</option>
                  <option value="130"  >Colorado</option>
                  <option value="131"  >Compass</option>
                  <option value="133"  >Convertible</option>
                  <option value="134"  >Corolla</option>
                  <option value="135"  >Corolla iM</option>
                  <option value="136"  >Corvette</option>
                  <option value="137"  >Coupe</option>
                  <option value="139"  >Crossover</option>
                  <option value="140"  >Cruze</option>
                  <option value="257"  >Cuore</option>
                  <option value="143"  >Durango</option>
                  <option value="144"  >Edge</option>
                  <option value="145"  >Elantra</option>
                  <option value="148"  >Escape</option>
                  <option value="149"  >Expedition</option>
                  <option value="150"  >Explorer</option>
                  <option value="152"  >Fit</option>
                  <option value="155"  >Forester</option>
                  <option value="160"  >Grand Caravan</option>
                  <option value="161"  >Grand Cherokee</option>
                  <option value="165"  >HR-V</option>
                  <option value="162"  >Hatchback</option>
                  <option value="169"  >ILX</option>
                  <option value="170"  >Impreza</option>
                  <option value="171"  >Ioniq</option>
                  <option value="174"  >Journey</option>
                  <option value="176"  >Legacy</option>
                  <option value="182"  >MDX</option>
                  <option value="245"  >Mira</option>
                  <option value="187"  >Odyssey</option>
                  <option value="189"  >Outback</option>
                  <option value="190"  >Pilot</option>
                  <option value="193"  >Q3 Quattro</option>
                  <option value="196"  >RDX</option>
                  <option value="200"  >RLX</option>
                  <option value="197"  >Renegade</option>
                  <option value="198"  >Ridgeline</option>
                  <option value="206"  >SUV</option>
                  <option value="201"  >Santa Fe</option>
                  <option value="202"  >Sedan</option>
                  <option value="203"  >Sonata</option>
                  <option value="210"  >Tucson</option>
                  <option value="214"  >WRX</option>
                  <option value="215"  >WRX STI</option>
            </select>
                     

                    </div>

                </form>

            </div>
        </div>
    )
}
