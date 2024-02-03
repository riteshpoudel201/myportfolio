const ContactDetails = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center mb-8 text-[16px]">
      {/* 3d earth component goes here in the future */}
      <div className="w-[90%] h-full flex flex-col px-3 py-6 bg-gray-300 rounded-lg">
        <h1 className="underline underline-offset-8 mb-4 w-full text-center font-bold text-2xl">
          Contact Details
        </h1>
        <div className="flex flex-row gap-1 justify-between leading-6 ">
          <span className="font-bold text-[1em]">Phone</span>
          <span className="text-[0.8em]">9819347438</span>
        </div>
        <div className="flex flex-row gap-1 justify-between leading-6">
          <span className="font-bold text-[1em]">Email</span>
          <span className="text-[0.8em]">ritesh.poudel.34@gmail.com</span>
        </div>

        {/* address starts here */}
        <div className="border-[0.5px] border-solid border-gray-400 p-2 mt-2">
          <h1 className="font-bold mb-2">Address</h1>

          <div className="flex flex-row gap-1 justify-between leading-4">
            <span className="font-semibold text-sm">Country</span>
            <span className="text-[0.8em]">Nepal</span>
          </div>
          <div className="flex flex-row gap-1 justify-between leading-4">
            <span className="font-semibold text-sm">District</span>
            <span className="text-[0.8em]">Morang</span>
          </div>
          <div className="flex flex-row gap-1 justify-between leading-4">
            <span className="font-semibold text-sm">Munnicipality / VDC</span>
            <span className="text-[0.8em]">Urlabari</span>
          </div>
          <div className="flex flex-row gap-1 justify-between leading-4">
            <span className="font-semibold text-sm">Ward No.</span>
            <span className="text-[0.8em]">7</span>
          </div>
          <div className="flex flex-row gap-2 justify-between leading-4">
            <span className="font-semibold text-sm">Street</span>
            <span className="text-[0.8em]">Namuna Chowk</span>
          </div>
        </div>
        {/* address ends here */}
        <div className="flex flex-row gap-1 justify-between leading-6">
          <span className="font-bold text-[1em]">Skype</span>
          <span className="text-[0.8em]">ritesh.poudel5@outlook.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
