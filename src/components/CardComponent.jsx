import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ CardLogo, CardInfo }) => {
  return (
    <div className="mx-2 my-4 dark:bg-gray-900 [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-SlightlyBlack [box-shadow:var(--shadow)] max-w-[300px]">
      <div className="flex flex-col items-center justify-between pt-9 px-6 pb-6 relative">
        <span className="relative mx-auto -mt-16 mb-8">
          <img src={CardLogo} alt="" />
        </span>

        <p className=" mb-4 font-medium text-sm text-justify hyphens-auto text-white">
          <FontAwesomeIcon className="mr-2" icon={faHandPointUp} size="lg" /> {CardInfo}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
