import { Input } from '@nextui-org/react';
import { useState } from 'react';

const RecipientBank = ({goNext}) => {
 const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [banks] = useState([
    'Access Bank',
    'GTBank',
    'First Bank',
    'UBA',
    'Zenith Bank',
    'Stanbic IBTC',
    'Fidelity Bank',
    'Ecobank',
    'Union Bank',
    'Polaris Bank',
  ]); // List of banks

  // Filter banks based on the search term
  const filteredBanks = banks.filter((bank) =>
    bank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectBank=()=>{
  goNext()
  }

  return (
   <div className="min-h-screen flex flex-col p-8 bg-white">
   <div className='mb-4'>
      <h1 className="text-2xl font-bold mb-2">Select Recipient&apos;s Bank</h1>
      <p>Recipient pays no fee</p>
   </div>
      <div className="w-full">
        {/* Search Input */}
        <Input
        size='lg'
          type="text"
          placeholder="Search for a bank..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='mb-8'
        />

        {/* List of Banks */}
        <div className="flex flex-col gap-4">
          {filteredBanks.length > 0 ? (
            filteredBanks.map((bank, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={selectBank}
              >
              <p className='text-lg'>{bank}</p>
              </div>
            ))
          ) : (
            <p className="p-4 text-gray-500">No banks found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecipientBank