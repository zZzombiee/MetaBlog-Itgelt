import moment from "moment";

const Dates = (props) => {
  const { date } = props;
  return (
    <p className="text-[#97989F] font-normal text-base" id="date ">
      {date}
    </p>
  );
};
export default Dates;
