import {WalletMenu} from 'containers/walletMenu';
import React, {useEffect, useState} from 'react';

/**
 *
 * FormModal executes the form component in test-transfer page with two validated fields with warnings so that they are not sent empty,
 * the button is disabled as long as the inputs are not filled, once data is entered the button is enabled
 * and you can click to go to the next Wallet modal connection
 *
 */
function FormModal() {
  const [dataForm, setDataForm] = useState({
    testName: '',
    testNumber: '',
  });

  const [wallet, setWallet] = useState(false);
  const [dataOk, setDataOk] = useState(false);
  const [edit, setEdit] = useState({
    testName: 'ok',
    testNumber: 'ok',
  });

  const handleModalWallet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWallet(true);
    setDataForm({
      testName: '',
      testNumber: '',
    });
  };

  useEffect(() => {
    if (dataForm.testName !== '' && dataForm.testNumber !== '') {
      setDataOk(true);
    } else {
      setDataOk(false);
    }
  }, [dataForm]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setDataForm({...dataForm, [e.target.name]: e.target.value});
    setEdit({...edit, [e.target.name]: e.target.value});
  };

  return (
    <div className="bg-white border border-solid border-gray-300 rounded-xl ">
      {
        wallet ? <WalletMenu /> : null
      }
      <div className="border-b border-gray-300 ">
        <h2 className="pb-2 my-2 ml-3">Test Transfer</h2>
      </div>
      <form onSubmit={e => handleModalWallet(e)} className="p-3">
        <div className="h-15">
          <label className=" w-auto mt-5">Test name</label>
          <input
            type="text"
            name="testName"
            value={dataForm.testName}
            placeholder="Enter a name"
            className="border border-solid border-gray-300 w-full h-5 rounded-lg p-2 mt-2"
            onChange={e => handleChange(e)}
          />
          {edit.testName === '' ? (
            <div className="mt-1 text-red-500 text-center">
              <span>*The Test name field is required</span>
            </div>
          ) : null}
        </div>
        <div className="h-16">
          <label className=" w-auto">Test number</label>
          <input
            type="number"
            name="testNumber"
            value={dataForm.testNumber}
            placeholder="0"
            className="border border-solid border-gray-300 w-full h-5 rounded-lg p-2 mt-2"
            onChange={e => handleChange(e)}
          />
          {edit.testNumber === '' ? (
            <div className="mt-1 text-red-500 text-center">
              <span>*The Test number field is required</span>
            </div>
          ) : null}
        </div>

        {dataOk ? (
          <button className="bg-primary-400 px-44 py-1.5 rounded-xl text-white">
            Next
          </button>
        ) : (
          <button
            disabled
            className="bg-primary-100 px-44 py-1.5 rounded-xl text-white focus:outline-none"
          >
            Next
          </button>
        )}
      </form>
    </div>
  );
}

export default FormModal;
