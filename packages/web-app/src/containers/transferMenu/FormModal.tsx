import React, {useEffect, useState} from 'react';

interface Props {
  handleForm: (params: any) => any;
}

/**
 *
 * FormModal executes the modal of the form with two validated fields with warnings so that they are not sent empty,
 * the button is disabled as long as the inputs are not filled, once data is entered the button is enabled
 * and you can click to go to the next Wallet modal connection
 *
 */
function FormModal({handleForm}: Props) {
  const [dataForm, setDataForm] = useState({
    testName: '',
    testNumber: '',
  });

  const [dataOk, setDataOk] = useState(false);
  const [edit, setEdit] = useState({
    testName: 'ok',
    testNumber: 'ok',
  });

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
    <div>
      <form onSubmit={e => handleForm(e)}>
        <div className="h-10">
          <label className=" w-auto ml-5">Test name</label>
          <input
            type="text"
            name="testName"
            value={dataForm.testName}
            placeholder="Enter a name"
            className="w-auto h-5  border-border-grey rounded-lg mx-3 p-2"
            onChange={e => handleChange(e)}
          />
          {edit.testName === '' ? (
            <div className="mt-1 text-red-500 text-center">
              <span>*The Test name field is required</span>
            </div>
          ) : null}
        </div>
        <div className="h-10">
          <label className=" w-auto ml-5">Test number</label>
          <input
            type="number"
            name="testNumber"
            value={dataForm.testNumber}
            placeholder="Enter a number "
            className="w-auto h-5  border-border-grey rounded-lg mx-1 p-2 "
            onChange={e => handleChange(e)}
          />
          {edit.testNumber === '' ? (
            <div className="mt-1 text-red-500 text-center">
              <span>*The Test number field is required</span>
            </div>
          ) : null}
        </div>

        {dataOk ? (
          <button className="bg-primary-400 px-44 py-1.5 rounded-xl text-white ml-1">
            Next
          </button>
        ) : (
          <button
            disabled
            className="bg-primary-100 px-44 py-1.5 rounded-xl text-white ml-1 focus:outline-none disabled:opacity-75"
          >
            Next
          </button>
        )}
      </form>
    </div>
  );
}

export default FormModal;
