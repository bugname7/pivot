import React, { useState } from 'react';

function App() {
  const [high, setHigh] = useState('');
  const [low, setLow] = useState('');
  const [close, setClose] = useState('');
  const [pp, setPp] = useState('');
  const [r1, setR1] = useState('');
  const [s1, setS1] = useState('');
  const [r2, setR2] = useState('');
  const [s2, setS2] = useState('');
  const [r3, setR3] = useState('');
  const [s3, setS3] = useState('');

  function validate() {
    if (!high) {
      alert('High qiymatini kiriting');
      return false;
    }
    if (!low) {
      alert('Low qiymatini kiriting');
      return false;
    }
    if (!close) {
      alert('Close qiymatini kiriting');
      return false;
    }
    return true;
  }

  function remove() {
    setHigh('');
    setLow('');
    setClose('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }

    const ppValue = (parseFloat(high) + parseFloat(low) + parseFloat(close)) / 3;
    setPp(ppValue.toFixed(3)); 
    const r1Value = (2 * ppValue) - parseFloat(low);
    const s1Value = (2 * ppValue) - parseFloat(high);
    const r2Value = ppValue + (parseFloat(high) - parseFloat(low));
    const s2Value = ppValue - (parseFloat(high) - parseFloat(low));
    const r3Value = parseFloat(high) + 2 * (ppValue - parseFloat(low));
    const s3Value = parseFloat(low) - 2 * (parseFloat(high) - ppValue);

    setR1(r1Value.toFixed(3)); 
    setS1(s1Value.toFixed(3)); 
    setR2(r2Value.toFixed(3)); 
    setS2(s2Value.toFixed(3)); 
    setR3(r3Value.toFixed(3)); 
    setS3(s3Value.toFixed(3)); 

    remove();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 p-5 rounded-md shadow-2xl flex flex-col w-full max-w-[500px] mx-auto"
      >
        <h1 className="text-2xl font-medium mb-5 text-center">Kunlik Pivot Darajalari</h1>

        <label htmlFor="high" className="text-xl mb-1">High kiriting</label>
        <input
          type="number"
          id="high"
          placeholder="High"
          value={high}
          onChange={(e) => setHigh(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md shadow-xl focus:outline-none"
        />

        <label htmlFor="low" className="text-xl mb-1">Low kiriting</label>
        <input
          type="number"
          id="low"
          placeholder="Low"
          value={low}
          onChange={(e) => setLow(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md shadow-xl focus:outline-none"
        />

        <label htmlFor="close" className="text-xl mb-1">Close kiriting</label>
        <input
          type="number"
          id="close"
          placeholder="Close"
          value={close}
          onChange={(e) => setClose(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-xl focus:outline-none"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600 w-full"
        >
          Natija
        </button>
      </form>

      <div className="w-full max-w-[500px] mx-auto bg-green-500 p-5 rounded-xl mt-10">
        <h1 className="text-md font-medium text-center text-2xl text-white">Asosiy Pivot narxi: {pp}</h1>

        <div className="flex flex-wrap justify-between gap-4 mt-4">
          <div className="flex flex-col w-full sm:w-[48%]">
            <h1 className="text-xl text-white font-medium">R1: {r1}</h1>
            <h1 className="text-xl text-white font-medium">R2: {r2}</h1>
            <h1 className="text-xl text-white font-medium">R3: {r3}</h1>
          </div>
          <div className="flex flex-col w-full sm:w-[48%]">
            <h1 className="text-xl text-white font-medium">S1: {s1}</h1>
            <h1 className="text-xl text-white font-medium">S2: {s2}</h1>
            <h1 className="text-xl text-white font-medium">S3: {s3}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
