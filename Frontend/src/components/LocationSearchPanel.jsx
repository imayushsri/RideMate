import React from 'react'

const LocationSearchPanel = ({ suggestions, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    }

    return (
      <div>
          {suggestions && suggestions.length > 0 ? (
              suggestions.map((elem, idx) => (
                  <div key={elem.place_id} 
                      onClick={() => handleSuggestionClick(elem.structured_formatting.main_text)} 
                      className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                      
                      <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                          <i className="ri-map-pin-fill"></i>
                      </h2>
                      
                      <h4 className='font-medium'>{elem.structured_formatting.main_text}</h4>
                  </div>
              ))
          ) : (
              <h4 className='text-gray-500 text-center mt-3'>No suggestions found</h4>
          )}
      </div>
  );
  
}

export default LocationSearchPanel