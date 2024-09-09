import Link from "next/link";

const Error = () => {
  return (
    <div className="w-[640px] h-52 mx-auto flex gap-14 my-[100px] ">
      <p className=" border-r border-gray-200 text-7xl flex items-center pr-14">
        404
      </p>
      <div className="flex flex-col gap-5 justify-center">
        <p className="font-semibold text-2xl">Page Not Found</p>
        <p className="text-gray-500">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href={"/"}>
          <button className="btn btn-primary w-fit">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};
export default Error;
