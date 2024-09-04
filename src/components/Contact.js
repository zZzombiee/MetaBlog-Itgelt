const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-16 my-[100px]">
      <div className=" flex flex-col gap-5 mb-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex justify-between">
          <div className="border border-solid rounded-xl w-[294px] p-4">
            <h1 className="text-2xl font-semibold">Address</h1>
            <p className="text-gray-500 ">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border border-solid rounded-xl w-[294px] p-4">
            <h1 className="text-2xl font-semibold">Contact</h1>
            <p className="text-gray-500 ">313-332-8662 </p>
            <p className="text-gray-500 ">info@email.com</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mb-16 h-[440px] pl-9 pr-32 py-6 flex flex-col gap-6 rounded-xl">
        <p className="text-lg font-semibold">Leave message</p>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <input
              type="text"
              className=" h-10 input input-bordered"
              placeholder="Your Name"
            />
            <input
              type="text"
              className=" h-10 input input-bordered"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="w-full h-10 input input-bordered"
            placeholder="Subject"
          />
          <textarea
            className="h-36 textarea textarea-bordered text-base "
            placeholder="Write a message"
          ></textarea>
          <button className="rounded-md bg-blue-600 w-32 h-10 text-white">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
